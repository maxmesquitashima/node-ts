import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { makeMockRequest } from "./__mocks__/mockRequest.mock";
import { makeMockResponse } from "./__mocks__/mockResponse.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = makeMockRequest({
      body: {
        name: "Nath",
        email: "nath@test.com",
      },
    });
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toEqual({
      message: "Usuário criado com sucesso",
    });
  });

  it("Não deve adicionar um novo usuário sem o nome", () => {
    const mockRequest = makeMockRequest({
      body: {
        email: "nath@test.com",
      },
    });
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toEqual({
      message: "bad request| Name obrigatório",
    });
  });

  it("Não deve adicionar um novo usuário quando o body for vazio", () => {
    const mockRequest = makeMockRequest({
      body: {},
    });
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toEqual({
      message: "bad request| Name obrigatório",
    });
  });

  it("Não deve adicionar um novo usuário sem o email", () => {
    const mockRequest = makeMockRequest({
      body: {
        name: "Nath",
      },
    });
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toEqual({
      message: "bad request| Email obrigatório",
    });
  });

  it("Deve retornar todos os usuários", () => {
    const mockRequest = makeMockRequest({});
    const mockResponse = makeMockResponse();
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockUserService.getAllUsers).toHaveBeenCalled();
    expect(mockResponse.state.status).toBe(200);
  });

  it("Deve deletar um usuário", () => {
    const mockRequest = makeMockRequest({
      params: {
        name: "Nath",
      },
    });
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockUserService.deleteUser).toHaveBeenCalledWith("Nath");
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toEqual({ message: "usuário deletado" });
  });
});
