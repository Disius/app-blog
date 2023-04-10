<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use jcobhams\NewsApi\NewsApi;
use jcobhams\NewsApi\NewsApiException;

class News_API extends Controller
{
    /**
     * @throws NewsApiException
     */
    public function News_api(){
        $your_api_key = 'f5939877dd4d4482ac907ab3348fce20';
        $api = new NewsApi($your_api_key);



         return $api->getEverything($q = 'México', $sources=null, $domains=null, $exclude_domains=null, $from=null, $to=null, $language='es', $sort_by=null,  $page_size='50', $page='2');


    }
}
