/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
   if (typeof define === 'function' && define.amd) {
      // AMD. Register as anonymous module.
      define(['jquery'], factory);
   } else {
      // Browser globals.
      factory(jQuery);
   }
}(function ($) {

   var pluses = /\+/g;

   function decode(s) {
      if (config.raw) {
         return s;
      }
      try {
         // If we can't decode the cookie, ignore it, it's unusable.
         return decodeURIComponent(s.replace(pluses, ' '));
      } catch(e) {}
   }

   function decodeAndParse(s) {
      if (s.indexOf('"') === 0) {
         // This is a quoted cookie as according to RFC2068, unescape...
         s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      }

      s = decode(s);

      try {
         // If we can't parse the cookie, ignore it, it's unusable.
         return config.json ? JSON.parse(s) : s;
      } catch(e) {}
   }

   var config = $.cookie = function (key, value, options) {

      // Write
      if (value !== undefined) {
         options = $.extend({}, config.defaults, options);

         if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
         }

         value = config.json ? JSON.stringify(value) : String(value);

         return (document.cookie = [
            config.raw ? key : encodeURIComponent(key),
            '=',
            config.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path    ? '; path=' + options.path : '',
            options.domain  ? '; domain=' + options.domain : '',
            options.secure  ? '; secure' : ''
         ].join(''));
      }

      // Read

      var result = key ? undefined : {};

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling $.cookie().
      var cookies = document.cookie ? document.cookie.split('; ') : [];

      for (var i = 0, l = cookies.length; i < l; i++) {
         var parts = cookies[i].split('=');
         var name = decode(parts.shift());
         var cookie = parts.join('=');

         if (key && key === name) {
            result = decodeAndParse(cookie);
            break;
         }

         // Prevent storing a cookie that we couldn't decode.
         if (!key && (cookie = decodeAndParse(cookie)) !== undefined) {
            result[name] = cookie;
         }
      }

      return result;
   };

   config.defaults = {};

   $.removeCookie = function (key, options) {
      if ($.cookie(key) !== undefined) {
         // Must not alter options, thus extending a fresh object...
         $.cookie(key, '', $.extend({}, options, { expires: -1 }));
         return true;
      }
      return false;
   };

}));

/* ======================================================================================
   @author     Carlos Doral Pérez (http://webartesanal.com)
   @version    0.19
   @copyright  Copyright &copy; 2013-2014 Carlos Doral Pérez, All Rights Reserved
               License: GPLv2 or later
   ====================================================================================== */

//
//
//
var cdp_cookie = {

   // vars
   _id_cookie: 'cdp-cookies-plugin-wp',

   //
   // Compruebo si ya existe la cookie si es visitante nuevo.
   //
   // Modif: 08-ene-2014. Compruebo primero si existe la cookie antes del contenido de la misma
   //
   ya_existe_cookie: function _ya_existe_cookie() {
      if( jQuery.cookie( cdp_cookie._id_cookie ) != null )
         return jQuery.cookie( cdp_cookie._id_cookie ) == 'cdp';
      return false;
   },

   // Guardo cookie
   poner_cookie: function _poner_cookie() {
      return jQuery.cookie( cdp_cookie._id_cookie, 'cdp', { expires: 365, path: '/' } );
   },

   // Eliminar cookie
   eliminar: function _eliminar() {
      return jQuery.removeCookie( cdp_cookie._id_cookie );
   },

   // Muestra aviso
   mostrar_aviso: function _mostrar_aviso() {
      if( cdp_cookies_info.layout == 'pagina' && cdp_cookies_info.posicion == 'superior' )
      {
         var aviso = jQuery( '.cdp-cookies-alerta' ).wrap( '<div>' ).parent().html();
         jQuery( '.cdp-cookies-alerta' ).parent().detach();
         jQuery( 'body' ).prepend( aviso );
      }
      if( jQuery( '.cdp-cookies-boton-cerrar' ).length > 0 )
         jQuery( '.cdp-cookies-boton-cerrar' ).click( function() {
            cdp_cookie.poner_cookie();
            jQuery( '.cdp-cookies-alerta' ).hide();
         } );
      jQuery( '.cdp-cookies-alerta' ).show();
   },

   //
   comportamiento: function _comportamiento() {
      return cdp_cookies_info.comportamiento;
   },

   // Preparo la query string
   variables_get: function _variables_get() {
      var url = window.location.href;
      var pares = url.slice( url.indexOf( '?' ) + 1 ).split( '&' );
      var query = {};
      for ( var i = 0 ; i < pares.length ; i++ ) {
         var par = pares[i].split( '=' );
         if( par.length == 1 )
            query[par[0]] = null;
         else
         if( par.length == 2 )
            query[par[0]] = par[1];
      }
      return query;
   },

   // Indica si hay vista previa
   hay_vista_previa: function _hay_vista_previa() {
      return window.location.href.indexOf( '?cdp_cookies_vista_previa=1' ) >= 0;
   },

   // Traigo aviso en vista previa
   mostrar_aviso_vista_previa: function _mostrar_aviso_vista_previa() {
      cdp_cookie.mostrar_aviso();
   },
};

//
//
//
jQuery( document ).ready( function( $ )
{
   // Funcionamiento para depuración desde el admin de Wordpress
   if( cdp_cookie.hay_vista_previa() )
   {
      cdp_cookie.mostrar_aviso_vista_previa();
      return;
   }

   // Si ya hay cookie retorno
   if( cdp_cookie.ya_existe_cookie() )
      return;

   // Comportamiento 'navegar'
   if( cdp_cookie.comportamiento() == 'navegar' )
      cdp_cookie.poner_cookie();

   // Muestro aviso
   cdp_cookie.mostrar_aviso();
} );
