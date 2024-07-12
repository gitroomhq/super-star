import { WordpressService } from "@/services/blog/providers/wordpress.service";
import { EmptyBlogService } from "@/services/blog/providers/empty.blog.service";
import { BeeHiivService } from "@/services/blog/providers/beehiiv.service";

export class BlogService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "wordpress":
        return new WordpressService();
      case "beehiiv":
        return new BeeHiivService();
      default:
        return new EmptyBlogService();
    }
  }
}

export const blogService = BlogService.staticSwitcher(
  process.env.BLOG_SERVICE!
);
