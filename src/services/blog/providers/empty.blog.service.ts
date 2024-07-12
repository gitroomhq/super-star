import { AbstractServicesService } from "@/services/abstract.services.service";
import { object, string } from "yup";
import { BlogInterface } from "@/services/blog/blog.interface";

export class EmptyBlogService
  extends AbstractServicesService
  implements BlogInterface
{
  validation = object({
    BLOG_PATH: string().required(),
  });

  providerName = "empty";

  async getPost(slug: string) {
    return {
      title: "empty",
      description: "empty",
      slug: "empty",
      seo: "empty",
      picture: "empty",
      created: 0,
      author: {
        name: "empty",
        picture: "empty",
      },
    };
  }

  async getPostList() {
    return [];
  }
}
