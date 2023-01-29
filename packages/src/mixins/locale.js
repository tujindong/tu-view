import { t } from '@packages/src/locale';

export default {
    methods: {
        t(...args) {
            return t.apply(this, args);
        }
    }
};
