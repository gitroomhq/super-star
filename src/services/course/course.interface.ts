export interface CourseInterface {
  joinCourse(name: string, email: string): Promise<void>;
}
