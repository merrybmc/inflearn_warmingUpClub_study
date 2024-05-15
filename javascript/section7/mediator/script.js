/**
 * Mediator Pattern (중재자 패턴)
 *
 * 객체 그룹에 대한 중앙 권한을 제공
 *
 */

class Participant {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
    this.messages = [];
  }

  send(message, to) {
    this.chatRoom.send(message, this, to);
  }

  receive(message, from) {
    this.messages.push({ message, from });
  }
}

class ChatRoom {
  constructor() {
    this.participants = {};
  }

  enter(participant) {
    this.participants[participant.name] = participant;
    participant.chatRoom = this;
  }

  send(message, participant, to) {
    this.participants[to.name].receive(message, participant);
  }
}

const chatRoom = new ChatRoom();

const user1 = new Participant('user1');
const user2 = new Participant('user2');
const user3 = new Participant('user3');

// 채팅방(중재자)에 들어와서 채팅 세션에 참여하는 3명의 유저 존재
// 각 참가자는 Participant 객체로 표시
// 참가자는 서로에게 메세지를 보내고 채팅방에서 라우팅을 처리
// 메세지를 다이렉트로 보내는 것이 아닌 중재자를 거쳐서 전달
// 이렇게하면 정크 메세지를 받지 않도록 유저를 보호하기 위해 정크필터와 같은 다른 복잡한 규칙도 추가 가능
