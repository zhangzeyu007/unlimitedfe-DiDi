

export default {
	/**
	 * @description 分页辅助函数，获取总页数，查询偏移
	 * @param {number} totalCount 总记录数
	 * @param {number} size 每页size
	 * @param {number} page 需要查询第几页
	 * @returns
	 */
	sendResponse(
		data?: any,
		other?: { msg: string; code: string } | any
	) {
		const result = other ? {} : { code: 200, msg: '操作成功' }
		const { code, msg } = result;
		const response = {
			code,
			msg,
			data
		}
		return response
	},
}