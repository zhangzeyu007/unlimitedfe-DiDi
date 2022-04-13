import { Service } from 'egg';


export default class Device extends Service {
	/**
	 * @description 查看设备列表
	 * @returns
	 * @memberof DeviceServ
	 */

	public async list(search: any) {
		const dataList = await this.ctx.model.device.list(search);
		return dataList;
	}
}