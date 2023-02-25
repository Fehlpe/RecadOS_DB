import { UserEntity } from "../entities/users.entity";
import { pgHelper } from "../pg-helper";

export class UserRepository {
  async createUser(
    userName: string,
    userEmail: string,
    userPassword: string
  ): Promise<UserEntity> {
    const manager = pgHelper.client.manager;

    const newUser = manager.create(UserEntity, {
      userName,
      userEmail,
      userPassword,
    });

    return await manager.save(newUser);
  }

  async checkExistingEmail(userEmail: string): Promise<boolean> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(UserEntity, {
      where: { userEmail },
    });
    return !!user;
  }

  async checkUserLogin(
    userEmail: string,
    userPassword: string
  ): Promise<UserEntity | null> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(UserEntity, {
      where: {
        userEmail,
        userPassword,
      },
    });
    return user;
  }
}
