import { delay, http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import {
  RegisterRequest,
  UserLoginRequest,
} from "@/src/features/auth/models/auth_forms";

const testEmail = "test@test.test";
const testPassword = "123";

export const authHandlers = [
  http.post("*/auth/register", async (info) => {
    await delay();
    const reqBody = (await info.request.clone().json()) as RegisterRequest;
    if (reqBody == null) {
      return HttpResponse.json(
        { detail: "Body must not be empty" },
        { status: 400 },
      );
    }

    if (reqBody.email === testEmail) {
      return HttpResponse.json(
        { detail: "This email already used" },
        { status: 400 },
      );
    }

    return HttpResponse.json({
      id: faker.number.int(),
      name: faker.person.firstName,
      surname: faker.person.lastName,
      email: reqBody.email,
      created_at: Date(),
    });
  }),

  http.post("*/auth/login", async (info) => {
    await delay();
    const reqBody = (await info.request.clone().json()) as UserLoginRequest;
    if (reqBody == null) {
      return HttpResponse.json(
        { detail: "Body must not be empty" },
        { status: 400 },
      );
    }

    if (reqBody.email === testEmail && reqBody.password === testPassword) {
      return HttpResponse.json({ status: 200 });
    }

    return HttpResponse.json(
      { detail: "Invalid email/password" },
      { status: 400 },
    );
  }),
];
