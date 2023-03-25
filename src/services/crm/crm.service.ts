import { PipedriveService } from "@github20k/services/crm/providers/pipedrive.service";

export class CRMService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "pipedrive":
        return new PipedriveService();
    }
  }
}
