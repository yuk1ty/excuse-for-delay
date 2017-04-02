export default class MessageGenerator {

  constructor() {
    this._messages = [
      {
        subject: '犬',
        reason: '犬がいぬ'
      },
      {
        subject: '猫',
        reason: 'キャットタワーから降りてこない'
      },
      {
        subject: '田園都市線',
        reason: 'いつもどおりの運行ダイヤな'
      },
      {
        subject: 'アヒルの大群',
        reason: '家の前を横断中な'
      }
    ]
  }

  generate() {
    const extractionNumber = Math.floor(Math.random() * this._messages.length)
    return this._messages[extractionNumber]
  }
}
