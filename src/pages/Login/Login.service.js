import { Requests } from '~/utils/Requests';

const { post } = Requests();
export const LoginUser = async (params) => {
    const url = `login`;
    return post(url, params, { Authorization: 'Bearer' });
};
