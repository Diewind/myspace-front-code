import ajax from './ajax';
import cityobj from './city';
const adminUrl = '/admin/';

// 获取分类列表
export const reqCategory = (parentId) => ajax(`${adminUrl}category/catelist`, { parentId });
// 添加分类
export const reqAddCategory = (parentId, categoryName) => ajax(`${adminUrl}category/add`, { parentId, categoryName }, 'POST');
// 更新分类
export const reqUpdateCategory = ({ categoryId, categoryName }) => ajax(`${adminUrl}category/update`, { categoryId, categoryName }, 'POST');
// 删除分类
export const reqDeleteCategory = (categoryId) => ajax(`${adminUrl}category/delete`, { categoryId }, 'POST');
