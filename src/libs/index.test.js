import { judge } from "."

describe("じゃんけん　引き分け", () => {
  it("ぐーvsぐー", () => {
    expect(judge("rock", "rock")).toBe("引き分け")
  })

  it("ちょきvsちょき", () => {
    expect(judge("scissors", "scissors")).toBe("引き分け")
  })

  it("ぱーvsぱー", () => {
    expect(judge("paper", "paper")).toBe("引き分け")
  })
})

describe("じゃんけん　勝ち", () => {
  it("ぐーvsちょき", () => {
    expect(judge("rock", "scissors")).toBe("勝ち")
  })

  it("ちょきvsぱー", () => {
    expect(judge("scissors", "paper")).toBe("勝ち")
  })

  it("ぱーvsぐー", () => {
    expect(judge("paper", "rock")).toBe("勝ち")
  })
})

describe("じゃんけん　負け", () => {
  it("ぐーvsぱー", () => {
    expect(judge("rock", "paper")).toBe("負け")
  })

  it("ちょきvsぐー", () => {
    expect(judge("scissors", "rock")).toBe("負け")
  })

  it("ぱーvsちょき", () => {
    expect(judge("paper", "scissors")).toBe("負け")
  })
})
