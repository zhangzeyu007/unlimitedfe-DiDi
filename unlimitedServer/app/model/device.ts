// import { Context, Service } from 'egg';

let _this = this
module.exports = app => {
	console.log(app);
	
	const { STRING, INTEGER } = app.Sequelize;
	_this.db =  app.model.define('device', {
		id: {
			type: INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		device_id: {
			type: STRING,
			allowNull: false,
			defaultValue: '',
		},
		product_id: {
			type: INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		device_name: {
			type: STRING,
			allowNull: false,
			defaultValue: 5,
		}
	}, {
		createdAt: 'createTime', // 指定名字
		updatedAt: 'updateTime'
	});

	console.log(_this.db);
}


// export default class Device extends Service {
// 	private db: Sequelize.Model<any, any, any>
// 	constructor(ctx: Context) {
// 		super(ctx)
// 	}
//  }