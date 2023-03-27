import { AnyObject } from "yup";

export abstract class AbstractServicesService {
  abstract validation: AnyObject;
  abstract providerName: string;
  async runEnvValidation() {
    try {
      await this.validation.validate(process.env, { abortEarly: false });
      return {};
    } catch (err: any) {
      return { [this.providerName]: err.errors };
    }
  }
}
