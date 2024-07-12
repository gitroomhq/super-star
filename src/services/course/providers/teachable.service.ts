import { CourseInterface } from "@/services/course/course.interface";
import axios, { AxiosHeaders } from "axios";
import { AbstractServicesService } from "@/services/abstract.services.service";
import { number, object, string } from "yup";

const headers = new AxiosHeaders({
  apiKey: process.env.COURSE_TOKEN!,
});

export class TeachableService
  extends AbstractServicesService
  implements CourseInterface
{
  validation = object({
    COURSE_TOKEN: string().required(),
    COURSE_ID: number().required(),
  });

  providerName = "Teachable";

  async joinCourse(name: string, email: string) {
    // Searching for the user in case exists, if not, creating a new one
    const { id: user_id } =
      (await this.findUser(email)) ||
      (
        await axios.post(
          "https://developers.teachable.com/v1/users",
          {
            name,
            email,
          },
          { headers }
        )
      ).data;

    await axios.post(
      "https://developers.teachable.com/v1/enroll",
      {
        user_id,
        course_id: +process.env.COURSE_ID!,
      },
      { headers }
    );
  }

  // recursion to iterate between the page as teachable doesn't have a search by email
  async findUser(email: string, page = 1): Promise<any> {
    const {
      data: {
        users,
        meta: { total },
      },
    } = await axios.get(
      `https://developers.teachable.com/v1/users?per=20&page=${page}`,
      {
        headers,
      }
    );

    const user = users?.find((u: any) => u.email === email);
    if (user) {
      return user;
    }

    if (Math.ceil(total / 20) > page) {
      return this.findUser(email, page + 1);
    }

    return false;
  }
}
