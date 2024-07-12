import { PipedriveService } from "@/services/crm/providers/pipedrive.service";

export class CRMService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "pipedrive":
        return new PipedriveService();
    }
  }
}

export const crmService = CRMService.staticSwitcher(process.env.CRM_SERVICE!);