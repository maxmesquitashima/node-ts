import { UserService, User } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Bruna", "bruna@test.com");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
  });

  it("Deve deletar um usuário", () => {
    const mockDb: User[] = [{ name: "Bruna", email: "bruna@test.com" }];
    const userService = new UserService(mockDb);
    userService.deleteUser("Bruna");
    expect(userService.db.length).toBe(0);
  });
});
