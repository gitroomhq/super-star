import { CrmInterface } from "@/services/crm/crm.interface";
import axios, { AxiosHeaders } from "axios";
import { number, object, string } from "yup";
import { AbstractServicesService } from "@/services/abstract.services.service";
export class PipedriveService
  extends AbstractServicesService
  implements CrmInterface
{
  validation = object({
    CRM_TOKEN: string().required(),
    PRICE: number().required(),
    CURRENCY: string().min(3).max(3).required(),
    CRM_PIPELINE: number().required(),
    CRM_STAGE: number().required(),
  });

  providerName = "PipeDrive";

  async addDeal(name: string, email: string) {
    // set the headers of the request
    const api = ("api_token=" + process.env.CRM_TOKEN!) as string;

    // search if the person exists (might have a few deals)
    const searchPerson = (
      await axios.get(
        `https://api.pipedrive.com/v1/persons/search?term=${email}&fields=email&${api}`
      )
    ).data;

    // If doesn't exists, add a new person
    const { id } = searchPerson?.data?.items?.length
      ? searchPerson?.data?.items[0].item
      : (
          await axios.post(`https://api.pipedrive.com/v1/persons?${api}`, {
            name,
            email,
          })
        ).data;

    // create a new deal with the person
    return (
      await axios.post(`https://api.pipedrive.com/v1/deals?${api}`, {
        title: "Course for " + name,
        person_id: id,
        visible_to: 3,
        value: process.env.PRICE!,
        currency: process.env.CURRENCY!,
        status: "open",
        probability: 100,
        pipeline_id: +process.env.CRM_PIPELINE!,
        stage_id: +process.env.CRM_STAGE!,
      })
    ).data;
  }
}
