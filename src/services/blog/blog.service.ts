import { WordpressService } from "@github20k/services/blog/providers/wordpress.service";
import { EmptyBlogService } from "@github20k/services/blog/providers/empty.blog.service";

export class BlogService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "wordpress":
        return new WordpressService();
      default:
        return new EmptyBlogService();
    }
  }
}

export const blogService = BlogService.staticSwitcher(
  process.env.BLOG_SERVICE!
);
