<%@ taglib prefix="s" uri="/struts-tags" %>
<!-- Open Graph data -->
<meta property="og:type" content="business.business">
<meta property="og:title" content="${param.title}">
<meta property="og:url" content="${param.url}">
<meta property="og:image" content="${param.image}">

<meta property="og:description" content="${param.description}" />
<meta property="og:site_name" content="${param.sitename}" />

<meta property="business:contact_data:street_address" content="${param.address}">
<meta property="business:contact_data:locality" content="${param.locality}">
<meta property="business:contact_data:region" content="${param.region}">
<meta property="business:contact_data:postal_code" content="${param.code}">
<meta property="business:contact_data:country_name" content="${param.country}">