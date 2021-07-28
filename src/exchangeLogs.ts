import Tools from "../utils/tools";

export default class ExchangeLogs {
  /**
   * 交换机 id
   */
  id: string;
  /**
   * 交换机名称
   */
  name: string;
  /**
   * 	emit 成功数量
   */
  emitNum: number;
  /**
   * 数据分配成功数量
   */
  dispenseNum: number;
  /**
   * 	消息队列 id 的列表
   */
  queueIdList: string[];
  /**
   * 消息队列名称列表
   */
  queueNameList: string[];
  /**
   * 消息队列数量
   */
  queueNum: number;

  constructor(name: string, queueIdList: string[], queueNameList: string[]) {
    this.id = Tools.random();
    this.name = name;
    this.queueIdList = queueIdList;
    this.queueNameList = queueNameList;
    this.queueNum = queueIdList.length;
  }
}
