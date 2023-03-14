import "../styles/globals.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-treegrid/styles/material.css";

import { registerLicense } from "@syncfusion/ej2-base";
export default function App({ Component, pageProps }) {
  registerLicense(
    "@32302e342e30ZUGfLidb7tglH1/jdZ7rfVFKkm06eInDYCqE96/R9IM=;Mgo DSMBaFt/QHRqVVhkVFpHaV1CQmFJfFBmQGlYflRwdkUmHVdTRHRcQl5iSn9Ud0RjW3tYdHE=;Mgo DSMBMAY9C3t2VVhkQlFacldJXnxLfkx0RWFab1t6dVRMYF5BJAtUQF1hSn5Qd0ZiXn5fcHZRQGZZ;Mgo DSMBPh8sVXJ0S0J XE9AflRBQmFJYVF2R2BJelRxdV9GYkwxOX1dQl9gSX1SdURkWH5ecnBTTmU=;@32302e342e30Srcn/taQc564BIjk 0bMSZchh/6zB1BZe9ebk21uJmg=;NRAiBiAaIQQuGjN/V0Z WE9EaFtKVmBWfFNpR2NbfE51flRHalxTVBYiSV9jS31TdURgWHhfcXRXQmdeVA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLfkx0RWFab1t6dVRMYF5BJAtUQF1hSn5Qd0ZiXn5fcHZRQWRZ;@32302e342e30dQhjVfiFHi7FjYAKVEJ4R0ks3uUYPAnZpM95Qiw4HDA=;@32302e342e30XcfLPfRXN3ic0tfVKStVsmjIjZfgS4SXjaIBHhR3FmU=;@32302e342e30iuKJeiRIkhLn2UjMiBhol3OV4/KxK O0XQfSE0hR89k=;@32302e342e30WA3sBjTdFNU4H2xs6JP90NfxPI/X8kEXl8uD0OIwOeg=;@32302e342e30ZUGfLidb7tglH1/jdZ7rfVFKkm06eInDYCqE96/R9IM="
  );
  return <Component {...pageProps} />;
}
