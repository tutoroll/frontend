import { UserResponse } from "@/src/shared/models/user";
import { faker } from "@faker-js/faker";
import { delay, http, HttpResponse } from "msw";

export const userHandlers = [
  http.get("*/user/me", async () => {
    await delay();
    const user: UserResponse = {
      id: 123,
      name: "Maxim",
      surname: "Seleznev",
      email: "test@test.test",
      created_at: new Date(2024, 2, 2, 15, 34, 44, 0).toISOString(),
      avatar_key: faker.string.uuid(),
    };
    return HttpResponse.json(user);
  }),

  http.post("*/user/avatar/me", async (info) => {
    await delay();
    const reqBody = await info.request.clone().formData();
    const file = reqBody.get("file");
    if (file == null || !(file instanceof File)) {
      return HttpResponse.json(
        { detail: "File must not be empty" },
        { status: 400 },
      );
    }

    if (!["image/png", "image/webp", "image/jpeg"].includes(file.type)) {
      return HttpResponse.json(
        { detail: "Only JPEG, PNG and WEBP are allowed" },
        { status: 400 },
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return HttpResponse.json(
        { detail: "Only files no more than 10 MB are allowed" },
        { status: 400 },
      );
    }

    return HttpResponse.json(null, { status: 200 });
  }),

  http.get("*/user/avatar/me", async () => {
    await delay();
    return HttpResponse.json({
      url: `https://i.pravatar.cc/150?img=${faker.number.int({ min: 1, max: 70 })}`,
    });
  }),
];
