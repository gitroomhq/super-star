import {WordpressService} from "@github20k/services/blog/providers/wordpress.service";

export class BlogService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "wordpress":
        return new WordpressService();
    }
  }
}

export const blogService = BlogService.staticSwitcher(process.env.BLOG_SERVICE!);