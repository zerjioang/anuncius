/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package smouq.compress;

public class HtmlCompressor {

    private boolean development;
    private boolean compressCss;
    private boolean compressJs;
    
    private static final String NONE = "";
    
    public HtmlCompressor(){
        this.development = false;
    }

    public String compress(String html) {
        //remove new lines, tabs, etc
        if(!development){
            html = html.replaceAll("\n|\r|\b|\t", NONE);
            //remove multiple spaces
            html = html.replaceAll("  ", NONE);
            //remove html comments
            html = html.replaceAll("<!--[\\w,\\s,\\.,\\-,#,=]*-->", NONE);
            html = html.replaceAll("> <", "><");
        }
        return html;
    }

    public boolean isDevelopment() {
        return development;
    }

    public void setDevelopment(boolean development) {
        this.development = development;
    }

    public boolean isCompressJs() {
        return compressJs;
    }

    public void setCompressJs(boolean compressJs) {
        this.compressJs = compressJs;
    }
    
    public void setCompressCss(boolean b) {
        this.compressCss = b;
    }

    public void setCompressJavaScript(boolean b) {
        this.compressJs = b;
    }
    
}
