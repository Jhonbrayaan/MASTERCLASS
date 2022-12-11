export abstract class RocketMembersRepostory {
  abstract create(name: string, memberFunction: string): promise<void>;
}