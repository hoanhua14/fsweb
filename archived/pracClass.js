class Food {
  constructor(healthy, flavor) {
    this.healthy = healthy;
    this.flavor = flavor;
  }
}

class Dessert extends Food {
  constructor() {}
}
class MainCourse extends Food {}
