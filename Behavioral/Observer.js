// The Observer pattern offers a subscription model in which objects subscribe to an event and 
// get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. 
// The Observer pattern facilitates good object-oriented design and promotes loose coupling.

// The Observer pattern is a design pattern that defines a one-to-many dependency between objects, so when one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically.

// Subject (Host)

class PartyHost {
    constructor() {
      this.friends = [];
    }
  
    inviteFriend(friend) {
      this.friends.push(friend);
    }
  
    changePartyDetails(details) {
      this.friends.forEach(friend => friend.notifyChange(details));
    }
  }
  
  // Observer (Friend)
  class PartyFriend {
    constructor(name) {
      this.name = name;
    }
  
    notifyChange(details) {
      console.log(`${this.name}, the party details have changed: ${details}`);
    }
  }
  
  // Example Usage
  const host = new PartyHost();
  
  const friend1 = new PartyFriend("Alice");
  const friend2 = new PartyFriend("Bob");
  
  host.inviteFriend(friend1);
  host.inviteFriend(friend2);
  
  host.changePartyDetails("New date: Next Saturday!");
  
  /* Output:
  Alice, the party details have changed: New date: Next Saturday!
  Bob, the party details have changed: New date: Next Saturday!
  */