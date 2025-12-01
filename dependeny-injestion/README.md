# Learning Dependency Injection

- **Learning exchange of Services instance between different module**(DI inside Modules):
  - First export the service inside the module

  ```
  @Module({
  providers: [PowerService],
  exports: [PowerService],
  })
  ```

  - Then import the module which is exporting its service

  ```
  @Module({
  imports: [PowerModule],
  providers: [CpuService],
  })
  ```

  - To use the service of another module , define constructor inside the service of the module

  ```
  @Injectable()
  export class CpuService {
  constructor(private powerService: PowerService) {}
  }
  ```

  - Multiple services from different module to target module

  ```
  @Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
  })
  ```
