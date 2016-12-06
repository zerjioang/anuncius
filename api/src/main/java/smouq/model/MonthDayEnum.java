/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.model;

/**
 *
 * @author .local
 */
public enum MonthDayEnum {
    DAY_01 {
        @Override
        public int getDay() {
            return 1;
        }
    }, DAY_02 {
        @Override
        public int getDay() {
            return 2;
        }
    }, DAY_03 {
        @Override
        public int getDay() {
            return 3;
        }
    }, DAY_04 {
        @Override
        public int getDay() {
            return 4;
        }
    }, DAY_05 {
        @Override
        public int getDay() {
            return 5;
        }
    }, DAY_06 {
        @Override
        public int getDay() {
            return 6;
        }
    }, DAY_07 {
        @Override
        public int getDay() {
            return 7;
        }
    }, DAY_08 {
        @Override
        public int getDay() {
            return 8;
        }
    }, DAY_09 {
        @Override
        public int getDay() {
            return 9;
        }
    }, DAY_10 {
        @Override
        public int getDay() {
            return 10;
        }
    }, DAY_11 {
        @Override
        public int getDay() {
            return 11;
        }
    }, DAY_12 {
        @Override
        public int getDay() {
            return 12;
        }
    }, DAY_13 {
        @Override
        public int getDay() {
            return 13;
        }
    }, DAY_14 {
        @Override
        public int getDay() {
            return 14;
        }
    }, DAY_15 {
        @Override
        public int getDay() {
            return 15;
        }
    }, DAY_16 {
        @Override
        public int getDay() {
            return 16;
        }
    }, DAY_17 {
        @Override
        public int getDay() {
            return 17;
        }
    }, DAY_18 {
        @Override
        public int getDay() {
            return 18;
        }
    }, DAY_19 {
        @Override
        public int getDay() {
            return 19;
        }
    }, DAY_20 {
        @Override
        public int getDay() {
            return 20;
        }
    }, DAY_21 {
        @Override
        public int getDay() {
            return 21;
        }
    }, DAY_22 {
        @Override
        public int getDay() {
            return 22;
        }
    }, DAY_23 {
        @Override
        public int getDay() {
            return 23;
        }
    }, DAY_24 {
        @Override
        public int getDay() {
            return 24;
        }
    }, DAY_25 {
        @Override
        public int getDay() {
            return 25;
        }
    }, DAY_26 {
        @Override
        public int getDay() {
            return 26;
        }
    }, DAY_27 {
        @Override
        public int getDay() {
            return 27;
        }
    }, DAY_28 {
        @Override
        public int getDay() {
            return 28;
        }
    }, DAY_29 {
        @Override
        public int getDay() {
            return 29;
        }
    }, DAY_30 {
        @Override
        public int getDay() {
            return 30;
        }
    }, DAY_31 {
        @Override
        public int getDay() {
            return 31;
        }
    };
    
    public abstract int getDay();
}
