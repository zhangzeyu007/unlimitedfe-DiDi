/*
 * @Author: lilialiuya
 * @Date: 2021-04-20 16:40:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-04-20 16:56:51
 * @Description: 分页接口
 */

export interface IPage {
    total: number;
    pageSize: number;
    pageNo: number;
    data: any[];
}