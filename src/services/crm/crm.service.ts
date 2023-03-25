import { PipedriveService } from "@github20k/services/crm/providers/pipedrive.service";
import { CrmInterface } from "@github20k/services/crm/crm.interface";

export class CRMService {
  static staticSwitcher(type: string): CrmInterface {
    switch (type) {
      case "pipedrive":
        return new PipedriveService();
    }
  }
}
