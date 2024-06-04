<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-04 09:52:00
 * @Description: 
-->
# Google Analytics (GA) and Google Tag Manager (GTM)

## GA

The latest version of GA is now GA4, GA4 is equivalent to GTAG, referring to the same thing.

Tracking is done using [gtag.js](https://www.googletagmanager.com/gtag/js).

## GTM

GTM assists in managing GA, allowing for further processing or labeling of events before transmitting them to GA.

Tracking is done using [gtm.js](https://www.googletagmanager.com/gtm.js).

### Core Concepts

- Variable: Defines variables used in tracking events.
  - For example, to track platform, a custom function can be used. To track userId or other data interacting with the business, data can be pushed using dataLayer.push({}), and then in the variable type of variable, choose dataLayer and input the value passed from the website.
  - The dataLayer is merely an array established for GA and GTAG to utilize. You can create it by assigning window.dataLayer=[] in the window, and GA and GTM will know where to fetch data from.
- Trigger: Defines the event trigger, such as click or page load.
- Tag: Defines the event name, associates with Trigger to determine the trigger event, and associates with Variable to define custom event parameters.

### Data Flow

When the page starts, it retrieves the GTM configuration to understand what needs to be reported. Then, it reports to GTM at the appropriate times, which GTM processes and passes on to GA. The final data is stored in GA; GTM acts as a filter in front of GA.

GTM is effective in tracking click events; by configuring a Tag and associating it with click text, there is no need to track every click individually.

While GTM can track page views, it does not have built-in page dwell time statistics. For time-based statistics, it is recommended to use GA. Therefore, if you need both click and page view tracking, GA and GTM can be simultaneously included in the headScript. GA does not require additional configuration of measurementId.