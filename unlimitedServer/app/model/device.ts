
module.exports = app => { 
const { STRING, INTEGER } = app.Sequelize;
const Device =	app.model.define('device', {
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
	},
	{
		createdAt: 'createTime', // 指定名字
       updatedAt: 'updateTime'
	});

	return Device
}


