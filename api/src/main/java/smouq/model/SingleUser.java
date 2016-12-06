/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.model;

import smouq.model.enums.CountryEnum;
import smouq.model.enums.GenreEnum;

/**
 *
 * @author .local
 */
public class SingleUser extends AbstractUser{
    
    protected String name;
    protected String surname;
    protected MonthDayEnum bornDay;
    protected YearMonthEnum bornMonth;
    protected int bornYear;
    protected GenreEnum genre;
    protected String phone;
    protected String country;
}
