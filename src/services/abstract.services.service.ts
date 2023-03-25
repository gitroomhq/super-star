import { AnyObject } from "yup";

// @ts-ignore
export abstract class AbstractServicesService<T> implements T {
  abstract validation: AnyObject;
  abstract providerName: string;
  async runEnvValidation() {
    try {
      await this.validation.validate(process.env, { abortEarly: false });
      return {};
    } catch (err) {
      return { [this.providerName]: err.errors };
    }
  }
}
