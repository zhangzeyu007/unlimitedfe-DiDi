import { Service } from 'egg';


export default class Device extends Service {
	/**
	 * @description 查看设备列表
	 * @returns
	 * @memberof DeviceServ
	 */
	public async list(search: any) {
		const keyArray = [
			'product_id',
		]
			const where = {};
			Object.keys(search).forEach(key => {
				if (keyArray.includes(key) && search[key]) {
					where[key] = search[key];
				}
			});
			const dataList = await this.ctx.model.Device.findAll({
				where
			})
			return dataList;
	}
}