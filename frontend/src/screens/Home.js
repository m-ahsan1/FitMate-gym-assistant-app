import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

function Home() {
  const [jobs, setJobs] = useState([
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
    {
      company_name: "ApTask",
      description:
        "Position Title: Swift Developer (MacOS with Radar)\n\nJob Location: Austin, TX...\n\nJob Type: FTE/Contract (Only W2)\n\nJOB DESCRIPTION\n\nRequired Skills:\n• Mandatory: Mac OS with Radar experience.\n• Experience: Swift, Objective-C, AppKit etc.\n• Required: Austin on-site (pending office re-open).\n• Development will be on Radar and Radar related features, components etc",
      detected_extensions: [],
      posted_at: "7 hours ago",
      schedule_type: "Full-time",
      extensions: ["7 hours ago", "Full-time", "No degree mentioned"],
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Swift",
            "Objective-C",
            "AppKit",
            "Mac OS with Radar experience",
          ],
        },
      ],
      job_id:
        "eyJqb2JfdGl0bGUiOiJTd2lmdCBEZXZlbG9wZXIgKE1hY09TIHdpdGggUmFkYXIpIiwiaHRpZG9jaWQiOiJoNnJlUDQ5TUstQXRDbjlMQUFBQUFBPT0iLCJobCI6ImVuIiwiZmMiOiJFcmNDQ3ZjQlFVeFBibkJaV0RKcWFIbDVPVjk1UW5aSmFEVnFZMFp2Wmtwd04xSlFjelZMU3pWbFFWWkpSSGQ0YVZveVpYbG5Nbk4wTms1eWJYZzNXVlV6YmpaMFNrSm9VM2hmTmtoVVVGQkdTMWh5WlZNMGQyaGFTVkZWT0RCak5Ya3hTblJpUWxoemRrMVdaekJMYzFsVVkzWk1iM2RqTFdkRWNtVkVWSGxaTkhKZlIxZDRaVjlIVWpSRVJtNUdSVkpIVEhCcVV6bENhVVpFYnpFMFpWRkdSVVIzYVhkcVltaHZkRE5NVkVrd1YwWnphSHB3YWtkalVHVllNRlZqUkhOVlVrODNSbGhwUlUwMGJXWTRTalpDUlZOTE1sUndkbHAwYjAwM2RtMW9iamg2VW1KVmNERnNTMHRWTTNNMmJFRXpNM1JtYkV0dGQxSkNPQklYWm5WT05GcG1kVTFJV1dWSU1GQkZVRFJNTmw5NVFUZ2FJa0ZLZDJzdE9HVnhiRXMxTjI5eUxVRTJNVmx6U0hCU1NURnVNazVqTmpkcGNrRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zd2lmdC1kZXZlbG9wZXItbWFjb3Mtd2l0aC1yYWRhci1hdC1hcHRhc2stMzc4MjczMDYwOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
      location: "Austin, TX",
      related_links: [
        { link: "http://www.aptask.com/", text: "aptask.com" },
        {
          link: "https://www.google.com/search?sca_esv=590311830&hl=en&q=ApTask&sa=X&ved=0ahUKEwj7w6Lq_YqDAxWHAzQIHWDfD_kQmJACCI8K",
          text: "See web results for ApTask",
        },
      ],
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAigGcW9rwphTCb0-ExvsXXJhc1bXtSrKkUWDzdrc&s",
      title: "Swift Developer (MacOS with Radar)",
      via: "via LinkedIn",
    },
  ]);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/api/jobs/").then((response) => {
  //     console.log(response.data);
  //     setJobs(response.data.jobs);
  //   });
  // }, []);
  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl text-center py-5">Latest Jobs</h1>
      <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {jobs.map((item) => (
          <div key={item.id}>
            <JobCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
