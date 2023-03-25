import { CrmInterface } from "@github20k/services/crm/crm.interface";
import axios, { AxiosHeaders } from "axios";
export class PipedriveService implements CrmInterface {
  async addDeal(name: string, email: string) {

    // set the headers of the request
    const headers = new AxiosHeaders({
      api_token: process.env.CRM_TOKEN as string,
    });

    // search if the person exists (might have a few deals)
    const searchPerson = (
      await axios.get(
        `https://api.pipedrive.com/v1/persons/search?term=${email}&fields=email`,
        { headers }
      )
    ).data;

    // If doesn't exists, add a new person
    const { id } = searchPerson?.data?.items?.length
      ? searchPerson?.data?.items[0].item
      : (
          await axios.post(
            "https://api.pipedrive.com/v1/persons",
            {
              name,
              email,
            },
            { headers }
          )
        ).data;

    // create a new deal with the person
    return (
      await axios.post(
        "https://api.pipedrive.com/v1/deals",
        {
          title: "Course for " + name,
          user_id: id,
          value: process.env.PRICE,
          currency: process.env.CURRENCY,
          status: "won",
          probability: 100,
          pipeline_id: process.env.CRM_PIPELINE,
          stage_id: process.env.CRM_STAGE,
        },
        { headers }
      )
    ).data;
  }
}
