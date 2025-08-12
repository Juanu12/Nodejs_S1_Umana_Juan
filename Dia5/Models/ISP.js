// Before ISP
class Worker {
  work() {
    // Implement work behavior
  }

  eat() {
    // Implement eat behavior
  }
}

// After ISP
class Workable {
  work() {
    // Implement work behavior
  }
}

class Eatable {
  eat() {
    // Implement eat behavior
  }
}

// class Worker implements Workable, Eatable {
  // Now implements only what it needs
//}