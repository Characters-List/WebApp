/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CharacterClassDto } from '../../models/character-class-dto';

export interface ApiV1CharacterClassesGet$Json$Params {
}

export function apiV1CharacterClassesGet$Json(http: HttpClient, rootUrl: string, params?: ApiV1CharacterClassesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CharacterClassDto>>> {
  const rb = new RequestBuilder(rootUrl, apiV1CharacterClassesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CharacterClassDto>>;
    })
  );
}

apiV1CharacterClassesGet$Json.PATH = '/api/v1/CharacterClasses';
