export enum UserRole {
  student = "student",
  tutor = "tutor",
}

export function parseUserRole(roleStr: string | null): UserRole | null {
  switch (roleStr) {
    case UserRole.student:
      return UserRole.student;
    case UserRole.tutor:
      return UserRole.tutor;
    default:
      return null;
  }
}
