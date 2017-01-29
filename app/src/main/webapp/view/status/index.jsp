<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- force IE browsers in compatibility mode to use their most aggressive rendering engine -->

    <meta charset="utf-8">
    <title>Anuncius Status</title>
    <meta name="description" content="Bienvenido al sistema de monitorizacion en tiempo real e historico de anuncius">

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

    <!-- Mobile IE allows us to activate ClearType technology for smoothing fonts for easy reading -->
    <meta http-equiv="cleartype" content="on">

    <!-- fonts -->
    <style>
        @font-face {
            font-family: 'proxima-nova';
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaLight.eot?host=status.wunderlist.com');
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaLight.eot?host=status.wunderlist.com#iefix') format('embedded-opentype'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaLight.woff?host=status.wunderlist.com') format('woff'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaLight.ttf?host=status.wunderlist.com') format('truetype');
            font-weight: 300;
            font-style: normal;
        }
        @font-face {
            font-family: 'proxima-nova';
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegular.eot?host=status.wunderlist.com');
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegular.eot?host=status.wunderlist.com#iefix') format('embedded-opentype'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegular.woff?host=status.wunderlist.com') format('woff'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegular.ttf?host=status.wunderlist.com') format('truetype');
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: 'proxima-nova';
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegularIt.eot?host=status.wunderlist.com');
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegularIt.eot?host=status.wunderlist.com#iefix') format('embedded-opentype'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegularIt.woff?host=status.wunderlist.com') format('woff'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaRegularIt.ttf?host=status.wunderlist.com') format('truetype');
            font-weight: 400;
            font-style: italic;
        }
        @font-face {
            font-family: 'proxima-nova';
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaSemibold.eot?host=status.wunderlist.com');
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaSemibold.eot?host=status.wunderlist.com#iefix') format('embedded-opentype'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaSemibold.woff?host=status.wunderlist.com') format('woff'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaSemibold.ttf?host=status.wunderlist.com') format('truetype');
            font-weight: 500;
            font-style: normal;
        }
        @font-face {
            font-family: 'proxima-nova';
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaBold.eot?host=status.wunderlist.com');
            src: url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaBold.eot?host=status.wunderlist.com#iefix') format('embedded-opentype'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaBold.woff?host=status.wunderlist.com') format('woff'), url('//dka575ofm4ao0.cloudfront.net/assets/ProximaNovaBold.ttf?host=status.wunderlist.com') format('truetype');
            font-weight: 700;
            font-style: normal;
        }
    </style>

    <link rel="shortcut icon" href='//dka575ofm4ao0.cloudfront.net/pages-favicon_logos/original/6481/open-uri20140818-7813-l6iyyw'>

    <meta name="globalsign-domain-verification" content="jMsfkTQm-DYLtrX0PQ4Vp1chE1FCqtqCX_Ea1lNK6E" />

    <!-- Le styles -->
    <link href="//dka575ofm4ao0.cloudfront.net/assets/status_manifest-85dd52f6846c98b902dc8afe316b945e.css" media="all" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    <style>
        /* BODY BACKGROUND */
        /* BODY BACKGROUND */
        /* BODY BACKGROUND */
        /* BODY BACKGROUND */
        /* BODY BACKGROUND */
        
        body,
        .layout-content.status.status-api .section .example-container .example-opener .color-secondary,
        .grouped-items-selector {
            background-color: #f2f2f2;
        }
        /* PRIMARY FONT COLOR */
        /* PRIMARY FONT COLOR */
        /* PRIMARY FONT COLOR */
        /* PRIMARY FONT COLOR */
        
        body.status,
        .color-primary,
        .color-primary:hover,
        .layout-content.status-index .status-day .update-title.impact-none a,
        .layout-content.status-index .status-day .update-title.impact-none a:hover,
        .layout-content.status-index .timeframes-container .timeframe.active,
        .layout-content.status-full-history .month .incident-container .impact-none,
        .layout-content.status.status-index .incidents-list .incident-title.impact-none a,
        .layout-content.status .grouped-items-selector.inline .grouped-item.active {
            color: #333333;
        }
        .layout-content.status.status-index .components-statuses .component-container .name {
            color: #333333;
            color: rgba(51, 51, 51, .8);
        }
        /* SECONDARY FONT COLOR */
        /* SECONDARY FONT COLOR */
        /* SECONDARY FONT COLOR */
        /* SECONDARY FONT COLOR */
        
        small,
        .layout-content.status .table-row .date,
        .color-secondary,
        .layout-content.status .grouped-items-selector.inline .grouped-item {
            color: #AAAAAA;
        }
        /* BORDER COLOR */
        /* BORDER COLOR */
        /* BORDER COLOR */
        /* BORDER COLOR */
        /* BORDER COLOR */
        /* BORDER COLOR */
        
        body.status .layout-content.status .border-color,
        hr,
        .tooltip-base,
        .markdown-display table {
            border-color: #E0E0E0;
        }
        .markdown-display table td {
            border-top-color: #E0E0E0;
        }
        .markdown-display table td + td,
        .markdown-display table th + th {
            border-left-color: #E0E0E0;
        }
        /* CSS REDS */
        /* CSS REDS */
        /* CSS REDS */
        /* CSS REDS */
        /* CSS REDS */
        /* CSS REDS */
        /* CSS REDS */
        
        .layout-content.status.status-index .status-day .update-title.impact-critical a,
        .layout-content.status.status-index .status-day .update-title.impact-critical a:hover,
        .layout-content.status.status-index .page-status.status-critical,
        .layout-content.status.status-index .unresolved-incident.impact-critical .incident-title,
        .flat-button.background-red {
            background-color: #e74c3c;
        }
        .layout-content.status-index .components-statuses .component-container.status-red:after,
        .layout-content.status-full-history .month .incident-container .impact-critical,
        .layout-content.status-incident .incident-name.impact-critical,
        .layout-content.status.status-index .incidents-list .incident-title.impact-critical a,
        .status-red .icon-indicator,
        .components-container .component-inner-container.status-red .component-status,
        .components-container .component-inner-container.status-red .icon-indicator {
            color: #e74c3c;
        }
        .layout-content.status.status-index .unresolved-incident.impact-critical .updates {
            border-color: #e74c3c;
        }
        /* CSS ORANGES */
        /* CSS ORANGES */
        /* CSS ORANGES */
        /* CSS ORANGES */
        /* CSS ORANGES */
        /* CSS ORANGES */
        
        .layout-content.status.status-index .status-day .update-title.impact-major a,
        .layout-content.status.status-index .status-day .update-title.impact-major a:hover,
        .layout-content.status.status-index .page-status.status-major,
        .layout-content.status.status-index .unresolved-incident.impact-major .incident-title {
            background-color: #e67e22;
        }
        .layout-content.status-index .components-statuses .component-container.status-orange:after,
        .layout-content.status-full-history .month .incident-container .impact-major,
        .layout-content.status-incident .incident-name.impact-major,
        .layout-content.status.status-index .incidents-list .incident-title.impact-major a,
        .status-orange .icon-indicator,
        .components-container .component-inner-container.status-orange .component-status,
        .components-container .component-inner-container.status-orange .icon-indicator {
            color: #e67e22;
        }
        .layout-content.status.status-index .unresolved-incident.impact-major .updates {
            border-color: #e67e22;
        }
        /* CSS YELLOWS */
        /* CSS YELLOWS */
        /* CSS YELLOWS */
        /* CSS YELLOWS */
        /* CSS YELLOWS */
        /* CSS YELLOWS */
        
        .layout-content.status.status-index .status-day .update-title.impact-minor a,
        .layout-content.status.status-index .status-day .update-title.impact-minor a:hover,
        .layout-content.status.status-index .page-status.status-minor,
        .layout-content.status.status-index .unresolved-incident.impact-minor .incident-title,
        .layout-content.status.status-index .scheduled-incidents-container .tab {
            background-color: #f1c40f;
        }
        .layout-content.status-index .components-statuses .component-container.status-yellow:after,
        .layout-content.status-full-history .month .incident-container .impact-minor,
        .layout-content.status-incident .incident-name.impact-minor,
        .layout-content.status.status-index .incidents-list .incident-title.impact-minor a,
        .status-yellow .icon-indicator,
        .components-container .component-inner-container.status-yellow .component-status,
        .components-container .component-inner-container.status-yellow .icon-indicator {
            color: #f1c40f;
        }
        .layout-content.status.status-index .unresolved-incident.impact-minor .updates,
        .layout-content.status.status-index .scheduled-incidents-container {
            border-color: #f1c40f;
        }
        /* CSS BLUES */
        /* CSS BLUES */
        /* CSS BLUES */
        /* CSS BLUES */
        /* CSS BLUES */
        /* CSS BLUES */
        
        .layout-content.status.status-index .status-day .update-title.impact-maintenance a,
        .layout-content.status.status-index .status-day .update-title.impact-maintenance a:hover,
        .layout-content.status.status-index .page-status.status-maintenance,
        .layout-content.status.status-index .unresolved-incident.impact-maintenance .incident-title,
        .layout-content.status.status-index .scheduled-incidents-container .tab {
            background-color: #3498DB;
        }
        .layout-content.status-index .components-statuses .component-container.status-blue:after,
        .layout-content.status-full-history .month .incident-container .impact-maintenance,
        .layout-content.status-incident .incident-name.impact-maintenance,
        .layout-content.status.status-index .incidents-list .incident-title.impact-maintenance a,
        .status-blue .icon-indicator,
        .components-container .component-inner-container.status-blue .component-status,
        .components-container .component-inner-container.status-blue .icon-indicator {
            color: #3498DB;
        }
        .layout-content.status.status-index .unresolved-incident.impact-maintenance .updates,
        .layout-content.status.status-index .scheduled-incidents-container {
            border-color: #3498DB;
        }
        /* CSS GREENS */
        /* CSS GREENS */
        /* CSS GREENS */
        /* CSS GREENS */
        /* CSS GREENS */
        /* CSS GREENS */
        /* CSS GREENS */
        
        .layout-content.status.status-index .page-status.status-none {
            background-color: #2fcc66;
        }
        .layout-content.status-index .components-statuses .component-container.status-green:after,
        .status-green .icon-indicator,
        .components-container .component-inner-container.status-green .component-status,
        .components-container .component-inner-container.status-green .icon-indicator {
            color: #2fcc66;
        }
        /* CSS LINK COLOR */
        /* CSS LINK COLOR */
        /* CSS LINK COLOR */
        /* CSS LINK COLOR */
        /* CSS LINK COLOR */
        /* CSS LINK COLOR */
        
        a,
        a:hover,
        .layout-content.status-index .page-footer span a:hover,
        .layout-content.status-index .timeframes-container .timeframe:not(.active):hover,
        .layout-content.status-incident .subheader a:hover {
            color: #2b96f1;
        }
        .flat-button,
        .masthead .updates-dropdown-container .show-updates-dropdown {
            background-color: #2b96f1;
        }
    </style>

    <!-- custom css -->


    <!-- Le HTML5 shim -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- injection for static -->


</head>


<body class="status index status-none">




    <div class="status-page-tour-info" data-js-hook="status-page-tour-info" style="display:none">
        <div class="container inner">
            Welcome to the demo status page. <a href="#" data-js-hook="restart-tour">Take the tour</a>.
        </div>
    </div>

    <div class="layout-content status status-index premium">
        <div class="masthead-container premium">
            <div class="masthead">
                <div class="images-container" id="cover-image-container" data-js-hook="images-container"></div>
                <style>
                    #cover-image-container {
                        background-image: url("//dka575ofm4ao0.cloudfront.net/pages-hero_covers/normal/6481/open-uri20140818-22586-kjvrqb");
                    }
                    @media only screen and (-webkit-min-device-pixel-ratio: 2),
                    only screen and (min-resolution: 192dpi) {
                        #cover-image-container {
                            background-image: url("//dka575ofm4ao0.cloudfront.net/pages-hero_covers/retina/6481/open-uri20140818-22586-kjvrqb") !important;
                        }
                    }
                </style>

                <div class="text-container">
                    <span class="page-name font-largest">
            <a href="https://support.wunderlist.com/" target="_blank">Wunderlist Support Center</a>
        </span>


                    <div class="updates-dropdown-container" data-js-hook="updates-dropdown-container">
                        <a href="#" data-js-hook="show-updates-dropdown" id="show-updates-dropdown" class="show-updates-dropdown">

                        </a>
                        <div class="updates-dropdown" data-js-hook="updates-dropdown" style="display:none">
                            <div class="updates-dropdown-nav nav-items-4">
                                <a href="#updates-dropdown-twitter" id="updates-dropdown-twitter-btn">
                                    <span class="icon-container twitter">
        </a>
        <a href="#updates-dropdown-support" id="updates-dropdown-support-btn">
          <span class="icon-container support">
        </a>
      <a href="#updates-dropdown-atom" id="updates-dropdown-atom-btn">
        <span class="icon-container rss">
      </a>
      <a href="#" data-js-hook="updates-dropdown-close" id="updates-dropdown-close-btn">
        x
      </a>
    </div>
    <div class="updates-dropdown-sections-container">




        <div class="updates-dropdown-section twitter" id="updates-dropdown-twitter" style="display:none">
          <a href="https://twitter.com/WunderlistHelp" class="twitter-follow-button" data-show-count="false" data-show-screen-name="true" data-width="59px">Follow @WunderlistHelp</a>
          or&nbsp;
          <a href="http://www.twitter.com/WunderlistHelp" target="_blank">view our profile</a>.
          <style>
            .twitter-follow-button {
              margin-bottom: -6px;
            }
          </style>

            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        </div>

        <div class="updates-dropdown-section support" id="updates-dropdown-support" style="display:none">
          Visit our <a href="https://support.wunderlist.com/" target="_blank">support site</a>.
        </div>

      <div class="updates-dropdown-section atom" id="updates-dropdown-atom">
          Get the <a href="https://status.wunderlist.com/history.atom" target="_blank">Atom Feed</a> or <a href="https://status.wunderlist.com/history.rss" target="_blank">RSS Feed</a>.
      </div>

    </div>
  </div>
</div>

      </div>
    </div>

</div> <!-- this is outside of the .container so that the cover photo can go full width on mobile -->


    <div class="container">
        <div class="page-status status-none">
          <span class="status font-large">
            All Systems Operational
          </span>
                                    <span class="last-updated-stamp  font-small"></span>
                            </div>


                            <div class="text-section">
                                <h4 class="font-largest">About This Site</h4>
                                <p class="color-secondary font-regular">
                                    Any time there's a scheduled maintenance or system performance issue, you'll find real-time updates here. Stay in the loop by following @Wunderlist on Twitter.
                                </p>
                            </div>

                            <div class="components-section font-regular">
                                <div class="components-container one-column">
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Real-time Sync
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, please sync manually">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Sign in
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, it won&amp;apos;t be possible to sign in or create a free account">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Lists
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, Lists will not be visible">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Items
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, Items in your lists will not be visible">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Comments
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, newly added Comments will show as &amp;apos;not synced&amp;apos;">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Reminders & Notifications
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="Includes all email, in-app and push notifications">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Files
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="Covers viewing, downloading and uploading all file attachments">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Subtasks
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="If unavailable, it won&amp;apos;t be possible to see existing Subtasks">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Sharing Lists
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="Covers sending new list invitations and accepting list invitations">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Notes
    </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                    <div class="component-container border-color">
                                        <div class="component-inner-container status-green " data-js-hook="">


                                            <span class="name">
      Mail to Wunderlist
        <span class="tooltip-base" data-js-hook="tooltip" data-responsive-placement="right-when-small" data-original-title="Services for email to item creation via me@wunderlist.com">?</span>
                                            </span>

                                            <span class="component-status">
      Operational
    </span>

                                            <span class="icon-indicator fa fa-check" data-js-hook="tooltip" data-original-title="Operational"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="component-statuses-legend font-small">
                                    <div class="legend-item status-green">
                                        <span class="icon-indicator fa fa-check"></span> Operational
                                    </div>
                                    <div class="legend-item status-yellow">
                                        <span class="icon-indicator fa fa-minus-square"></span> Degraded Performance
                                    </div>
                                    <div class="legend-item status-orange">
                                        <span class="icon-indicator fa fa-exclamation-triangle"></span> Partial Outage
                                    </div>
                                    <div class="breaker"></div>
                                    <div class="legend-item status-red">
                                        <span class="icon-indicator fa fa-times"></span> Major Outage
                                    </div>
                                    <div class="legend-item status-blue">
                                        <span class="icon-indicator fa fa-wrench"></span> Maintenance
                                    </div>
                                </div>
                            </div>

                            <div class="incidents-list format-expanded">
                                <div class="font-largest">Past Incidents</div>

                                <div class="status-day font-regular no-incidents">
                                    <div class="date border-color font-large">Jan <var data-var="date">29</var>, <var data-var="year">2017</var>
                                    </div>
                                    <p class="color-secondary">No incidents reported today.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <script>
                    $(function() {
                        $('.powered-by').show().css('display', 'inline-block !important');
                    });
                </script>
</body>
</html>