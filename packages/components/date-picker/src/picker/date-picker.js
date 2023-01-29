import Picker from '../picker';
import DatePanel from "../panel/date"

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    } else if (type === 'monthrange') {
        return MonthRangePanel;
    }
    return DatePanel;
};

export default {
    mixins: [Picker],

    name: 'TuDatePicker',

    props: {
        type: {
            type: String,
            default: 'date'
        },
        timeArrowControl: Boolean
    },

    watch: {
        type(type) {
            if (this.picker) {
                this.unmountPicker();
                this.panel = getPanel(type);
                this.mountPicker();
            } else {
                this.panel = getPanel(type);
            }
        }
    },

    created() {
        this.panel = getPanel(this.type);
    }
};
