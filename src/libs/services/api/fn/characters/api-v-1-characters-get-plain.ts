/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CharacterDto } from '../../models/character-dto';

export interface ApiV1CharactersGet$Plain$Params {
  'X-Api-Version'?: string;
}

export function apiV1CharactersGet$Plain(http: HttpClient, rootUrl: string, params?: ApiV1CharactersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CharacterDto>>> {
  const rb = new RequestBuilder(rootUrl, apiV1CharactersGet$Plain.PATH, 'get');
  if (params) {
    rb.header('X-Api-Version', params['X-Api-Version'], {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CharacterDto>>;
    })
  );
}

apiV1CharactersGet$Plain.PATH = '/api/v1/Characters';
