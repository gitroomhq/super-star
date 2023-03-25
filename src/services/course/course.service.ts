import { TeachableService } from "@github20k/services/course/providers/teachable.service";
import { CourseInterface } from "@github20k/services/course/course.interface";

export class CourseService {
  static staticSwitcher(type: string): CourseInterface {
    switch (type) {
      case "teachable":
        return new TeachableService();
    }
  }
}
