/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package musutruq.model;

/**
 *
 * @author .local
 */
public enum YearMonthEnum {
    MONTH_01 {
        @Override
        public int getMonthNumber() {
            return 1;
        }

        @Override
        public String getMonthName() {
            return "January";
        }
    }, MONTH_02 {
        @Override
        public int getMonthNumber() {
            return 2;
        }

        @Override
        public String getMonthName() {
            return "February";
        }
    }, MONTH_03 {
        @Override
        public int getMonthNumber() {
            return 3;
        }

        @Override
        public String getMonthName() {
            return "March";
        }
    }, MONTH_04 {
        @Override
        public int getMonthNumber() {
            return 4;
        }

        @Override
        public String getMonthName() {
            return "April";
        }
    }, MONTH_05 {
        @Override
        public int getMonthNumber() {
            return 5;
        }

        @Override
        public String getMonthName() {
            return "May";
        }
    }, MONTH_06 {
        @Override
        public int getMonthNumber() {
            return 6;
        }

        @Override
        public String getMonthName() {
            return "June";
        }
    }, MONTH_07 {
        @Override
        public int getMonthNumber() {
            return 7;
        }

        @Override
        public String getMonthName() {
            return "July";
        }
    },
    MONTH_08 {
        @Override
        public int getMonthNumber() {
            return 8;
        }

        @Override
        public String getMonthName() {
            return "August";
        }
    }, MONTH_09 {
        @Override
        public int getMonthNumber() {
            return 9;
        }

        @Override
        public String getMonthName() {
            return "September";
        }
    }, MONTH_10 {
        @Override
        public int getMonthNumber() {
            return 10;
        }

        @Override
        public String getMonthName() {
            return "October";
        }
    }, MONTH_11 {
        @Override
        public int getMonthNumber() {
            return 11;
        }

        @Override
        public String getMonthName() {
            return "November";
        }
    }, MONTH_12 {
        @Override
        public int getMonthNumber() {
            return 12;
        }

        @Override
        public String getMonthName() {
            return "December";
        }
    };
    
    public abstract int getMonthNumber();
    public abstract String getMonthName();
}
