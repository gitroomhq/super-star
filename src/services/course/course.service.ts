import { TeachableService } from "@/services/course/providers/teachable.service";

export class CourseService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "teachable":
        return new TeachableService();
    }
  }
}

export const courseService = CourseService.staticSwitcher(process.env.COURSE_SERVICE!);