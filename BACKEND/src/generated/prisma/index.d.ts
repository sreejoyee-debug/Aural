
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistTrack
 * 
 */
export type PlaylistTrack = $Result.DefaultSelection<Prisma.$PlaylistTrackPayload>
/**
 * Model MoodEvent
 * 
 */
export type MoodEvent = $Result.DefaultSelection<Prisma.$MoodEventPayload>
/**
 * Model ListeningEvent
 * 
 */
export type ListeningEvent = $Result.DefaultSelection<Prisma.$ListeningEventPayload>
/**
 * Model ArtistFollow
 * 
 */
export type ArtistFollow = $Result.DefaultSelection<Prisma.$ArtistFollowPayload>
/**
 * Model FavoriteTrack
 * 
 */
export type FavoriteTrack = $Result.DefaultSelection<Prisma.$FavoriteTrackPayload>
/**
 * Model ListeningHistory
 * 
 */
export type ListeningHistory = $Result.DefaultSelection<Prisma.$ListeningHistoryPayload>
/**
 * Model TrackedArtist
 * 
 */
export type TrackedArtist = $Result.DefaultSelection<Prisma.$TrackedArtistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlaylistSource: {
  MANUAL: 'MANUAL',
  AI_DJ: 'AI_DJ',
  MOOD: 'MOOD',
  WEATHER: 'WEATHER',
  TRAVEL: 'TRAVEL',
  ROULETTE: 'ROULETTE'
};

export type PlaylistSource = (typeof PlaylistSource)[keyof typeof PlaylistSource]


export const MoodSource: {
  PICKER: 'PICKER',
  TEXT: 'TEXT',
  WEATHER: 'WEATHER',
  PLAYLIST: 'PLAYLIST'
};

export type MoodSource = (typeof MoodSource)[keyof typeof MoodSource]

}

export type PlaylistSource = $Enums.PlaylistSource

export const PlaylistSource: typeof $Enums.PlaylistSource

export type MoodSource = $Enums.MoodSource

export const MoodSource: typeof $Enums.MoodSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistTrack`: Exposes CRUD operations for the **PlaylistTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistTracks
    * const playlistTracks = await prisma.playlistTrack.findMany()
    * ```
    */
  get playlistTrack(): Prisma.PlaylistTrackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodEvent`: Exposes CRUD operations for the **MoodEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodEvents
    * const moodEvents = await prisma.moodEvent.findMany()
    * ```
    */
  get moodEvent(): Prisma.MoodEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listeningEvent`: Exposes CRUD operations for the **ListeningEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListeningEvents
    * const listeningEvents = await prisma.listeningEvent.findMany()
    * ```
    */
  get listeningEvent(): Prisma.ListeningEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistFollow`: Exposes CRUD operations for the **ArtistFollow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistFollows
    * const artistFollows = await prisma.artistFollow.findMany()
    * ```
    */
  get artistFollow(): Prisma.ArtistFollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteTrack`: Exposes CRUD operations for the **FavoriteTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteTracks
    * const favoriteTracks = await prisma.favoriteTrack.findMany()
    * ```
    */
  get favoriteTrack(): Prisma.FavoriteTrackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listeningHistory`: Exposes CRUD operations for the **ListeningHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListeningHistories
    * const listeningHistories = await prisma.listeningHistory.findMany()
    * ```
    */
  get listeningHistory(): Prisma.ListeningHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedArtist`: Exposes CRUD operations for the **TrackedArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedArtists
    * const trackedArtists = await prisma.trackedArtist.findMany()
    * ```
    */
  get trackedArtist(): Prisma.TrackedArtistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Artist: 'Artist',
    Track: 'Track',
    Playlist: 'Playlist',
    PlaylistTrack: 'PlaylistTrack',
    MoodEvent: 'MoodEvent',
    ListeningEvent: 'ListeningEvent',
    ArtistFollow: 'ArtistFollow',
    FavoriteTrack: 'FavoriteTrack',
    ListeningHistory: 'ListeningHistory',
    TrackedArtist: 'TrackedArtist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "artist" | "track" | "playlist" | "playlistTrack" | "moodEvent" | "listeningEvent" | "artistFollow" | "favoriteTrack" | "listeningHistory" | "trackedArtist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistTrack: {
        payload: Prisma.$PlaylistTrackPayload<ExtArgs>
        fields: Prisma.PlaylistTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          findFirst: {
            args: Prisma.PlaylistTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          findMany: {
            args: Prisma.PlaylistTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          create: {
            args: Prisma.PlaylistTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          createMany: {
            args: Prisma.PlaylistTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistTrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          delete: {
            args: Prisma.PlaylistTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          update: {
            args: Prisma.PlaylistTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistTrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          aggregate: {
            args: Prisma.PlaylistTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistTrack>
          }
          groupBy: {
            args: Prisma.PlaylistTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistTrackCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTrackCountAggregateOutputType> | number
          }
        }
      }
      MoodEvent: {
        payload: Prisma.$MoodEventPayload<ExtArgs>
        fields: Prisma.MoodEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          findFirst: {
            args: Prisma.MoodEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          findMany: {
            args: Prisma.MoodEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>[]
          }
          create: {
            args: Prisma.MoodEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          createMany: {
            args: Prisma.MoodEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>[]
          }
          delete: {
            args: Prisma.MoodEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          update: {
            args: Prisma.MoodEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          deleteMany: {
            args: Prisma.MoodEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>[]
          }
          upsert: {
            args: Prisma.MoodEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEventPayload>
          }
          aggregate: {
            args: Prisma.MoodEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodEvent>
          }
          groupBy: {
            args: Prisma.MoodEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodEventCountArgs<ExtArgs>
            result: $Utils.Optional<MoodEventCountAggregateOutputType> | number
          }
        }
      }
      ListeningEvent: {
        payload: Prisma.$ListeningEventPayload<ExtArgs>
        fields: Prisma.ListeningEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListeningEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListeningEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          findFirst: {
            args: Prisma.ListeningEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListeningEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          findMany: {
            args: Prisma.ListeningEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>[]
          }
          create: {
            args: Prisma.ListeningEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          createMany: {
            args: Prisma.ListeningEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListeningEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>[]
          }
          delete: {
            args: Prisma.ListeningEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          update: {
            args: Prisma.ListeningEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          deleteMany: {
            args: Prisma.ListeningEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListeningEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListeningEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>[]
          }
          upsert: {
            args: Prisma.ListeningEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningEventPayload>
          }
          aggregate: {
            args: Prisma.ListeningEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListeningEvent>
          }
          groupBy: {
            args: Prisma.ListeningEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListeningEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListeningEventCountArgs<ExtArgs>
            result: $Utils.Optional<ListeningEventCountAggregateOutputType> | number
          }
        }
      }
      ArtistFollow: {
        payload: Prisma.$ArtistFollowPayload<ExtArgs>
        fields: Prisma.ArtistFollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          findFirst: {
            args: Prisma.ArtistFollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          findMany: {
            args: Prisma.ArtistFollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>[]
          }
          create: {
            args: Prisma.ArtistFollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          createMany: {
            args: Prisma.ArtistFollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistFollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>[]
          }
          delete: {
            args: Prisma.ArtistFollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          update: {
            args: Prisma.ArtistFollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          deleteMany: {
            args: Prisma.ArtistFollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistFollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistFollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>[]
          }
          upsert: {
            args: Prisma.ArtistFollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistFollowPayload>
          }
          aggregate: {
            args: Prisma.ArtistFollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistFollow>
          }
          groupBy: {
            args: Prisma.ArtistFollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistFollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistFollowCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistFollowCountAggregateOutputType> | number
          }
        }
      }
      FavoriteTrack: {
        payload: Prisma.$FavoriteTrackPayload<ExtArgs>
        fields: Prisma.FavoriteTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          findFirst: {
            args: Prisma.FavoriteTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          findMany: {
            args: Prisma.FavoriteTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>[]
          }
          create: {
            args: Prisma.FavoriteTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          createMany: {
            args: Prisma.FavoriteTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteTrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>[]
          }
          delete: {
            args: Prisma.FavoriteTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          update: {
            args: Prisma.FavoriteTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteTrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteTrackPayload>
          }
          aggregate: {
            args: Prisma.FavoriteTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteTrack>
          }
          groupBy: {
            args: Prisma.FavoriteTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteTrackCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteTrackCountAggregateOutputType> | number
          }
        }
      }
      ListeningHistory: {
        payload: Prisma.$ListeningHistoryPayload<ExtArgs>
        fields: Prisma.ListeningHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListeningHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListeningHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          findFirst: {
            args: Prisma.ListeningHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListeningHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          findMany: {
            args: Prisma.ListeningHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>[]
          }
          create: {
            args: Prisma.ListeningHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          createMany: {
            args: Prisma.ListeningHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListeningHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>[]
          }
          delete: {
            args: Prisma.ListeningHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          update: {
            args: Prisma.ListeningHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ListeningHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListeningHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListeningHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ListeningHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningHistoryPayload>
          }
          aggregate: {
            args: Prisma.ListeningHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListeningHistory>
          }
          groupBy: {
            args: Prisma.ListeningHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListeningHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListeningHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ListeningHistoryCountAggregateOutputType> | number
          }
        }
      }
      TrackedArtist: {
        payload: Prisma.$TrackedArtistPayload<ExtArgs>
        fields: Prisma.TrackedArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          findFirst: {
            args: Prisma.TrackedArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          findMany: {
            args: Prisma.TrackedArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>[]
          }
          create: {
            args: Prisma.TrackedArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          createMany: {
            args: Prisma.TrackedArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>[]
          }
          delete: {
            args: Prisma.TrackedArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          update: {
            args: Prisma.TrackedArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          deleteMany: {
            args: Prisma.TrackedArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>[]
          }
          upsert: {
            args: Prisma.TrackedArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedArtistPayload>
          }
          aggregate: {
            args: Prisma.TrackedArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedArtist>
          }
          groupBy: {
            args: Prisma.TrackedArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedArtistCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedArtistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    artist?: ArtistOmit
    track?: TrackOmit
    playlist?: PlaylistOmit
    playlistTrack?: PlaylistTrackOmit
    moodEvent?: MoodEventOmit
    listeningEvent?: ListeningEventOmit
    artistFollow?: ArtistFollowOmit
    favoriteTrack?: FavoriteTrackOmit
    listeningHistory?: ListeningHistoryOmit
    trackedArtist?: TrackedArtistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    playlists: number
    moodEvents: number
    listeningEvents: number
    artistFollows: number
    favoriteTracks: number
    listeningHistory: number
    trackedArtists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    moodEvents?: boolean | UserCountOutputTypeCountMoodEventsArgs
    listeningEvents?: boolean | UserCountOutputTypeCountListeningEventsArgs
    artistFollows?: boolean | UserCountOutputTypeCountArtistFollowsArgs
    favoriteTracks?: boolean | UserCountOutputTypeCountFavoriteTracksArgs
    listeningHistory?: boolean | UserCountOutputTypeCountListeningHistoryArgs
    trackedArtists?: boolean | UserCountOutputTypeCountTrackedArtistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoodEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListeningEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArtistFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistFollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteTrackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListeningHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrackedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedArtistWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    tracks: number
    followers: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | ArtistCountOutputTypeCountTracksArgs
    followers?: boolean | ArtistCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistFollowWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    playlistTracks: number
    listeningEvents: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistTracks?: boolean | TrackCountOutputTypeCountPlaylistTracksArgs
    listeningEvents?: boolean | TrackCountOutputTypeCountListeningEventsArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountPlaylistTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountListeningEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningEventWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    tracks: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | PlaylistCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    displayName: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    displayName: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    moodEvents?: boolean | User$moodEventsArgs<ExtArgs>
    listeningEvents?: boolean | User$listeningEventsArgs<ExtArgs>
    artistFollows?: boolean | User$artistFollowsArgs<ExtArgs>
    favoriteTracks?: boolean | User$favoriteTracksArgs<ExtArgs>
    listeningHistory?: boolean | User$listeningHistoryArgs<ExtArgs>
    trackedArtists?: boolean | User$trackedArtistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "displayName" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    moodEvents?: boolean | User$moodEventsArgs<ExtArgs>
    listeningEvents?: boolean | User$listeningEventsArgs<ExtArgs>
    artistFollows?: boolean | User$artistFollowsArgs<ExtArgs>
    favoriteTracks?: boolean | User$favoriteTracksArgs<ExtArgs>
    listeningHistory?: boolean | User$listeningHistoryArgs<ExtArgs>
    trackedArtists?: boolean | User$trackedArtistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      moodEvents: Prisma.$MoodEventPayload<ExtArgs>[]
      listeningEvents: Prisma.$ListeningEventPayload<ExtArgs>[]
      artistFollows: Prisma.$ArtistFollowPayload<ExtArgs>[]
      favoriteTracks: Prisma.$FavoriteTrackPayload<ExtArgs>[]
      listeningHistory: Prisma.$ListeningHistoryPayload<ExtArgs>[]
      trackedArtists: Prisma.$TrackedArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      displayName: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moodEvents<T extends User$moodEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$moodEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listeningEvents<T extends User$listeningEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$listeningEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artistFollows<T extends User$artistFollowsArgs<ExtArgs> = {}>(args?: Subset<T, User$artistFollowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteTracks<T extends User$favoriteTracksArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteTracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listeningHistory<T extends User$listeningHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$listeningHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedArtists<T extends User$trackedArtistsArgs<ExtArgs> = {}>(args?: Subset<T, User$trackedArtistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.moodEvents
   */
  export type User$moodEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    where?: MoodEventWhereInput
    orderBy?: MoodEventOrderByWithRelationInput | MoodEventOrderByWithRelationInput[]
    cursor?: MoodEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodEventScalarFieldEnum | MoodEventScalarFieldEnum[]
  }

  /**
   * User.listeningEvents
   */
  export type User$listeningEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    where?: ListeningEventWhereInput
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    cursor?: ListeningEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListeningEventScalarFieldEnum | ListeningEventScalarFieldEnum[]
  }

  /**
   * User.artistFollows
   */
  export type User$artistFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    where?: ArtistFollowWhereInput
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    cursor?: ArtistFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistFollowScalarFieldEnum | ArtistFollowScalarFieldEnum[]
  }

  /**
   * User.favoriteTracks
   */
  export type User$favoriteTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    where?: FavoriteTrackWhereInput
    orderBy?: FavoriteTrackOrderByWithRelationInput | FavoriteTrackOrderByWithRelationInput[]
    cursor?: FavoriteTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteTrackScalarFieldEnum | FavoriteTrackScalarFieldEnum[]
  }

  /**
   * User.listeningHistory
   */
  export type User$listeningHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    where?: ListeningHistoryWhereInput
    orderBy?: ListeningHistoryOrderByWithRelationInput | ListeningHistoryOrderByWithRelationInput[]
    cursor?: ListeningHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListeningHistoryScalarFieldEnum | ListeningHistoryScalarFieldEnum[]
  }

  /**
   * User.trackedArtists
   */
  export type User$trackedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    where?: TrackedArtistWhereInput
    orderBy?: TrackedArtistOrderByWithRelationInput | TrackedArtistOrderByWithRelationInput[]
    cursor?: TrackedArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedArtistScalarFieldEnum | TrackedArtistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    monthlyListeners: number | null
  }

  export type ArtistSumAggregateOutputType = {
    monthlyListeners: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    countryCode: string | null
    imageUrl: string | null
    monthlyListeners: number | null
    createdAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    countryCode: string | null
    imageUrl: string | null
    monthlyListeners: number | null
    createdAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    countryCode: number
    imageUrl: number
    monthlyListeners: number
    createdAt: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    monthlyListeners?: true
  }

  export type ArtistSumAggregateInputType = {
    monthlyListeners?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
    imageUrl?: true
    monthlyListeners?: true
    createdAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
    imageUrl?: true
    monthlyListeners?: true
    createdAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
    imageUrl?: true
    monthlyListeners?: true
    createdAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    countryCode: string | null
    imageUrl: string | null
    monthlyListeners: number | null
    createdAt: Date
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryCode?: boolean
    imageUrl?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryCode?: boolean
    imageUrl?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryCode?: boolean
    imageUrl?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    countryCode?: boolean
    imageUrl?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryCode" | "imageUrl" | "monthlyListeners" | "createdAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      tracks: Prisma.$TrackPayload<ExtArgs>[]
      followers: Prisma.$ArtistFollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      countryCode: string | null
      imageUrl: string | null
      monthlyListeners: number | null
      createdAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tracks<T extends Artist$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Artist$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Artist$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artist$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly countryCode: FieldRef<"Artist", 'String'>
    readonly imageUrl: FieldRef<"Artist", 'String'>
    readonly monthlyListeners: FieldRef<"Artist", 'Int'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.tracks
   */
  export type Artist$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Artist.followers
   */
  export type Artist$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    where?: ArtistFollowWhereInput
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    cursor?: ArtistFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistFollowScalarFieldEnum | ArtistFollowScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type TrackSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    title: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    artistId: string | null
    createdAt: Date | null
  }

  export type TrackMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    title: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    artistId: string | null
    createdAt: Date | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    externalId: number
    title: number
    album: number
    artworkUrl: number
    durationSeconds: number
    artistId: number
    audioFeatures: number
    createdAt: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type TrackSumAggregateInputType = {
    durationSeconds?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    artistId?: true
    createdAt?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    artistId?: true
    createdAt?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    artistId?: true
    audioFeatures?: true
    createdAt?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: string
    externalId: string | null
    title: string
    album: string | null
    artworkUrl: string | null
    durationSeconds: number
    artistId: string
    audioFeatures: JsonValue | null
    createdAt: Date
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    artistId?: boolean
    audioFeatures?: boolean
    createdAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    playlistTracks?: boolean | Track$playlistTracksArgs<ExtArgs>
    listeningEvents?: boolean | Track$listeningEventsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    artistId?: boolean
    audioFeatures?: boolean
    createdAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    artistId?: boolean
    audioFeatures?: boolean
    createdAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    externalId?: boolean
    title?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    artistId?: boolean
    audioFeatures?: boolean
    createdAt?: boolean
  }

  export type TrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "title" | "album" | "artworkUrl" | "durationSeconds" | "artistId" | "audioFeatures" | "createdAt", ExtArgs["result"]["track"]>
  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    playlistTracks?: boolean | Track$playlistTracksArgs<ExtArgs>
    listeningEvents?: boolean | Track$listeningEventsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type TrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
      playlistTracks: Prisma.$PlaylistTrackPayload<ExtArgs>[]
      listeningEvents: Prisma.$ListeningEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      title: string
      album: string | null
      artworkUrl: string | null
      durationSeconds: number
      artistId: string
      audioFeatures: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks and returns the data updated in the database.
     * @param {TrackUpdateManyAndReturnArgs} args - Arguments to update many Tracks.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlistTracks<T extends Track$playlistTracksArgs<ExtArgs> = {}>(args?: Subset<T, Track$playlistTracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listeningEvents<T extends Track$listeningEventsArgs<ExtArgs> = {}>(args?: Subset<T, Track$listeningEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Track model
   */
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'String'>
    readonly externalId: FieldRef<"Track", 'String'>
    readonly title: FieldRef<"Track", 'String'>
    readonly album: FieldRef<"Track", 'String'>
    readonly artworkUrl: FieldRef<"Track", 'String'>
    readonly durationSeconds: FieldRef<"Track", 'Int'>
    readonly artistId: FieldRef<"Track", 'String'>
    readonly audioFeatures: FieldRef<"Track", 'Json'>
    readonly createdAt: FieldRef<"Track", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Track updateManyAndReturn
   */
  export type TrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to delete.
     */
    limit?: number
  }

  /**
   * Track.playlistTracks
   */
  export type Track$playlistTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    cursor?: PlaylistTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * Track.listeningEvents
   */
  export type Track$listeningEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    where?: ListeningEventWhereInput
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    cursor?: ListeningEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListeningEventScalarFieldEnum | ListeningEventScalarFieldEnum[]
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    coverUrl: string | null
    source: $Enums.PlaylistSource | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    coverUrl: string | null
    source: $Enums.PlaylistSource | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    coverUrl: number
    source: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    coverUrl?: true
    source?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    coverUrl?: true
    source?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    coverUrl?: true
    source?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string | null
    coverUrl: string | null
    source: $Enums.PlaylistSource
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    source?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tracks?: boolean | Playlist$tracksArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    source?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    source?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    source?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "coverUrl" | "source" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tracks?: boolean | Playlist$tracksArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      tracks: Prisma.$PlaylistTrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string | null
      coverUrl: string | null
      source: $Enums.PlaylistSource
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tracks<T extends Playlist$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly ownerId: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly coverUrl: FieldRef<"Playlist", 'String'>
    readonly source: FieldRef<"Playlist", 'PlaylistSource'>
    readonly isPublic: FieldRef<"Playlist", 'Boolean'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.tracks
   */
  export type Playlist$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    cursor?: PlaylistTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistTrack
   */

  export type AggregatePlaylistTrack = {
    _count: PlaylistTrackCountAggregateOutputType | null
    _avg: PlaylistTrackAvgAggregateOutputType | null
    _sum: PlaylistTrackSumAggregateOutputType | null
    _min: PlaylistTrackMinAggregateOutputType | null
    _max: PlaylistTrackMaxAggregateOutputType | null
  }

  export type PlaylistTrackAvgAggregateOutputType = {
    position: number | null
  }

  export type PlaylistTrackSumAggregateOutputType = {
    position: number | null
  }

  export type PlaylistTrackMinAggregateOutputType = {
    playlistId: string | null
    trackId: string | null
    position: number | null
    addedAt: Date | null
  }

  export type PlaylistTrackMaxAggregateOutputType = {
    playlistId: string | null
    trackId: string | null
    position: number | null
    addedAt: Date | null
  }

  export type PlaylistTrackCountAggregateOutputType = {
    playlistId: number
    trackId: number
    position: number
    addedAt: number
    _all: number
  }


  export type PlaylistTrackAvgAggregateInputType = {
    position?: true
  }

  export type PlaylistTrackSumAggregateInputType = {
    position?: true
  }

  export type PlaylistTrackMinAggregateInputType = {
    playlistId?: true
    trackId?: true
    position?: true
    addedAt?: true
  }

  export type PlaylistTrackMaxAggregateInputType = {
    playlistId?: true
    trackId?: true
    position?: true
    addedAt?: true
  }

  export type PlaylistTrackCountAggregateInputType = {
    playlistId?: true
    trackId?: true
    position?: true
    addedAt?: true
    _all?: true
  }

  export type PlaylistTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTrack to aggregate.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistTracks
    **/
    _count?: true | PlaylistTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistTrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistTrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistTrackMaxAggregateInputType
  }

  export type GetPlaylistTrackAggregateType<T extends PlaylistTrackAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistTrack[P]>
      : GetScalarType<T[P], AggregatePlaylistTrack[P]>
  }




  export type PlaylistTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithAggregationInput | PlaylistTrackOrderByWithAggregationInput[]
    by: PlaylistTrackScalarFieldEnum[] | PlaylistTrackScalarFieldEnum
    having?: PlaylistTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistTrackCountAggregateInputType | true
    _avg?: PlaylistTrackAvgAggregateInputType
    _sum?: PlaylistTrackSumAggregateInputType
    _min?: PlaylistTrackMinAggregateInputType
    _max?: PlaylistTrackMaxAggregateInputType
  }

  export type PlaylistTrackGroupByOutputType = {
    playlistId: string
    trackId: string
    position: number
    addedAt: Date
    _count: PlaylistTrackCountAggregateOutputType | null
    _avg: PlaylistTrackAvgAggregateOutputType | null
    _sum: PlaylistTrackSumAggregateOutputType | null
    _min: PlaylistTrackMinAggregateOutputType | null
    _max: PlaylistTrackMaxAggregateOutputType | null
  }

  type GetPlaylistTrackGroupByPayload<T extends PlaylistTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistTrackGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistTrackGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    trackId?: boolean
    position?: boolean
    addedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    trackId?: boolean
    position?: boolean
    addedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    trackId?: boolean
    position?: boolean
    addedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectScalar = {
    playlistId?: boolean
    trackId?: boolean
    position?: boolean
    addedAt?: boolean
  }

  export type PlaylistTrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"playlistId" | "trackId" | "position" | "addedAt", ExtArgs["result"]["playlistTrack"]>
  export type PlaylistTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type PlaylistTrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type PlaylistTrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $PlaylistTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistTrack"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      playlistId: string
      trackId: string
      position: number
      addedAt: Date
    }, ExtArgs["result"]["playlistTrack"]>
    composites: {}
  }

  type PlaylistTrackGetPayload<S extends boolean | null | undefined | PlaylistTrackDefaultArgs> = $Result.GetResult<Prisma.$PlaylistTrackPayload, S>

  type PlaylistTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistTrackCountAggregateInputType | true
    }

  export interface PlaylistTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistTrack'], meta: { name: 'PlaylistTrack' } }
    /**
     * Find zero or one PlaylistTrack that matches the filter.
     * @param {PlaylistTrackFindUniqueArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistTrackFindUniqueArgs>(args: SelectSubset<T, PlaylistTrackFindUniqueArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistTrackFindUniqueOrThrowArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindFirstArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistTrackFindFirstArgs>(args?: SelectSubset<T, PlaylistTrackFindFirstArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindFirstOrThrowArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistTracks
     * const playlistTracks = await prisma.playlistTrack.findMany()
     * 
     * // Get first 10 PlaylistTracks
     * const playlistTracks = await prisma.playlistTrack.findMany({ take: 10 })
     * 
     * // Only select the `playlistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.findMany({ select: { playlistId: true } })
     * 
     */
    findMany<T extends PlaylistTrackFindManyArgs>(args?: SelectSubset<T, PlaylistTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistTrack.
     * @param {PlaylistTrackCreateArgs} args - Arguments to create a PlaylistTrack.
     * @example
     * // Create one PlaylistTrack
     * const PlaylistTrack = await prisma.playlistTrack.create({
     *   data: {
     *     // ... data to create a PlaylistTrack
     *   }
     * })
     * 
     */
    create<T extends PlaylistTrackCreateArgs>(args: SelectSubset<T, PlaylistTrackCreateArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistTracks.
     * @param {PlaylistTrackCreateManyArgs} args - Arguments to create many PlaylistTracks.
     * @example
     * // Create many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistTrackCreateManyArgs>(args?: SelectSubset<T, PlaylistTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistTracks and returns the data saved in the database.
     * @param {PlaylistTrackCreateManyAndReturnArgs} args - Arguments to create many PlaylistTracks.
     * @example
     * // Create many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistTracks and only return the `playlistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.createManyAndReturn({
     *   select: { playlistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistTrackCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistTrack.
     * @param {PlaylistTrackDeleteArgs} args - Arguments to delete one PlaylistTrack.
     * @example
     * // Delete one PlaylistTrack
     * const PlaylistTrack = await prisma.playlistTrack.delete({
     *   where: {
     *     // ... filter to delete one PlaylistTrack
     *   }
     * })
     * 
     */
    delete<T extends PlaylistTrackDeleteArgs>(args: SelectSubset<T, PlaylistTrackDeleteArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistTrack.
     * @param {PlaylistTrackUpdateArgs} args - Arguments to update one PlaylistTrack.
     * @example
     * // Update one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistTrackUpdateArgs>(args: SelectSubset<T, PlaylistTrackUpdateArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistTracks.
     * @param {PlaylistTrackDeleteManyArgs} args - Arguments to filter PlaylistTracks to delete.
     * @example
     * // Delete a few PlaylistTracks
     * const { count } = await prisma.playlistTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistTrackDeleteManyArgs>(args?: SelectSubset<T, PlaylistTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistTrackUpdateManyArgs>(args: SelectSubset<T, PlaylistTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTracks and returns the data updated in the database.
     * @param {PlaylistTrackUpdateManyAndReturnArgs} args - Arguments to update many PlaylistTracks.
     * @example
     * // Update many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistTracks and only return the `playlistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.updateManyAndReturn({
     *   select: { playlistId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistTrackUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistTrack.
     * @param {PlaylistTrackUpsertArgs} args - Arguments to update or create a PlaylistTrack.
     * @example
     * // Update or create a PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.upsert({
     *   create: {
     *     // ... data to create a PlaylistTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistTrack we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistTrackUpsertArgs>(args: SelectSubset<T, PlaylistTrackUpsertArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackCountArgs} args - Arguments to filter PlaylistTracks to count.
     * @example
     * // Count the number of PlaylistTracks
     * const count = await prisma.playlistTrack.count({
     *   where: {
     *     // ... the filter for the PlaylistTracks we want to count
     *   }
     * })
    **/
    count<T extends PlaylistTrackCountArgs>(
      args?: Subset<T, PlaylistTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistTrackAggregateArgs>(args: Subset<T, PlaylistTrackAggregateArgs>): Prisma.PrismaPromise<GetPlaylistTrackAggregateType<T>>

    /**
     * Group by PlaylistTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistTrackGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistTrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistTrack model
   */
  readonly fields: PlaylistTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistTrack model
   */
  interface PlaylistTrackFieldRefs {
    readonly playlistId: FieldRef<"PlaylistTrack", 'String'>
    readonly trackId: FieldRef<"PlaylistTrack", 'String'>
    readonly position: FieldRef<"PlaylistTrack", 'Int'>
    readonly addedAt: FieldRef<"PlaylistTrack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistTrack findUnique
   */
  export type PlaylistTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack findUniqueOrThrow
   */
  export type PlaylistTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack findFirst
   */
  export type PlaylistTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack findFirstOrThrow
   */
  export type PlaylistTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack findMany
   */
  export type PlaylistTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack create
   */
  export type PlaylistTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistTrack.
     */
    data: XOR<PlaylistTrackCreateInput, PlaylistTrackUncheckedCreateInput>
  }

  /**
   * PlaylistTrack createMany
   */
  export type PlaylistTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistTracks.
     */
    data: PlaylistTrackCreateManyInput | PlaylistTrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistTrack createManyAndReturn
   */
  export type PlaylistTrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistTracks.
     */
    data: PlaylistTrackCreateManyInput | PlaylistTrackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrack update
   */
  export type PlaylistTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistTrack.
     */
    data: XOR<PlaylistTrackUpdateInput, PlaylistTrackUncheckedUpdateInput>
    /**
     * Choose, which PlaylistTrack to update.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack updateMany
   */
  export type PlaylistTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistTracks.
     */
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTracks to update
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to update.
     */
    limit?: number
  }

  /**
   * PlaylistTrack updateManyAndReturn
   */
  export type PlaylistTrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistTracks.
     */
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTracks to update
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrack upsert
   */
  export type PlaylistTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistTrack to update in case it exists.
     */
    where: PlaylistTrackWhereUniqueInput
    /**
     * In case the PlaylistTrack found by the `where` argument doesn't exist, create a new PlaylistTrack with this data.
     */
    create: XOR<PlaylistTrackCreateInput, PlaylistTrackUncheckedCreateInput>
    /**
     * In case the PlaylistTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistTrackUpdateInput, PlaylistTrackUncheckedUpdateInput>
  }

  /**
   * PlaylistTrack delete
   */
  export type PlaylistTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter which PlaylistTrack to delete.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack deleteMany
   */
  export type PlaylistTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTracks to delete
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to delete.
     */
    limit?: number
  }

  /**
   * PlaylistTrack without action
   */
  export type PlaylistTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
  }


  /**
   * Model MoodEvent
   */

  export type AggregateMoodEvent = {
    _count: MoodEventCountAggregateOutputType | null
    _min: MoodEventMinAggregateOutputType | null
    _max: MoodEventMaxAggregateOutputType | null
  }

  export type MoodEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: string | null
    source: $Enums.MoodSource | null
    createdAt: Date | null
  }

  export type MoodEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: string | null
    source: $Enums.MoodSource | null
    createdAt: Date | null
  }

  export type MoodEventCountAggregateOutputType = {
    id: number
    userId: number
    mood: number
    source: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type MoodEventMinAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    source?: true
    createdAt?: true
  }

  export type MoodEventMaxAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    source?: true
    createdAt?: true
  }

  export type MoodEventCountAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    source?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type MoodEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEvent to aggregate.
     */
    where?: MoodEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEvents to fetch.
     */
    orderBy?: MoodEventOrderByWithRelationInput | MoodEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodEvents
    **/
    _count?: true | MoodEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodEventMaxAggregateInputType
  }

  export type GetMoodEventAggregateType<T extends MoodEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodEvent[P]>
      : GetScalarType<T[P], AggregateMoodEvent[P]>
  }




  export type MoodEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEventWhereInput
    orderBy?: MoodEventOrderByWithAggregationInput | MoodEventOrderByWithAggregationInput[]
    by: MoodEventScalarFieldEnum[] | MoodEventScalarFieldEnum
    having?: MoodEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodEventCountAggregateInputType | true
    _min?: MoodEventMinAggregateInputType
    _max?: MoodEventMaxAggregateInputType
  }

  export type MoodEventGroupByOutputType = {
    id: string
    userId: string
    mood: string
    source: $Enums.MoodSource
    metadata: JsonValue | null
    createdAt: Date
    _count: MoodEventCountAggregateOutputType | null
    _min: MoodEventMinAggregateOutputType | null
    _max: MoodEventMaxAggregateOutputType | null
  }

  type GetMoodEventGroupByPayload<T extends MoodEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodEventGroupByOutputType[P]>
            : GetScalarType<T[P], MoodEventGroupByOutputType[P]>
        }
      >
    >


  export type MoodEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    source?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEvent"]>

  export type MoodEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    source?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEvent"]>

  export type MoodEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    source?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEvent"]>

  export type MoodEventSelectScalar = {
    id?: boolean
    userId?: boolean
    mood?: boolean
    source?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type MoodEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mood" | "source" | "metadata" | "createdAt", ExtArgs["result"]["moodEvent"]>
  export type MoodEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mood: string
      source: $Enums.MoodSource
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["moodEvent"]>
    composites: {}
  }

  type MoodEventGetPayload<S extends boolean | null | undefined | MoodEventDefaultArgs> = $Result.GetResult<Prisma.$MoodEventPayload, S>

  type MoodEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodEventCountAggregateInputType | true
    }

  export interface MoodEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodEvent'], meta: { name: 'MoodEvent' } }
    /**
     * Find zero or one MoodEvent that matches the filter.
     * @param {MoodEventFindUniqueArgs} args - Arguments to find a MoodEvent
     * @example
     * // Get one MoodEvent
     * const moodEvent = await prisma.moodEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodEventFindUniqueArgs>(args: SelectSubset<T, MoodEventFindUniqueArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodEventFindUniqueOrThrowArgs} args - Arguments to find a MoodEvent
     * @example
     * // Get one MoodEvent
     * const moodEvent = await prisma.moodEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventFindFirstArgs} args - Arguments to find a MoodEvent
     * @example
     * // Get one MoodEvent
     * const moodEvent = await prisma.moodEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodEventFindFirstArgs>(args?: SelectSubset<T, MoodEventFindFirstArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventFindFirstOrThrowArgs} args - Arguments to find a MoodEvent
     * @example
     * // Get one MoodEvent
     * const moodEvent = await prisma.moodEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodEvents
     * const moodEvents = await prisma.moodEvent.findMany()
     * 
     * // Get first 10 MoodEvents
     * const moodEvents = await prisma.moodEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodEventWithIdOnly = await prisma.moodEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodEventFindManyArgs>(args?: SelectSubset<T, MoodEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodEvent.
     * @param {MoodEventCreateArgs} args - Arguments to create a MoodEvent.
     * @example
     * // Create one MoodEvent
     * const MoodEvent = await prisma.moodEvent.create({
     *   data: {
     *     // ... data to create a MoodEvent
     *   }
     * })
     * 
     */
    create<T extends MoodEventCreateArgs>(args: SelectSubset<T, MoodEventCreateArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodEvents.
     * @param {MoodEventCreateManyArgs} args - Arguments to create many MoodEvents.
     * @example
     * // Create many MoodEvents
     * const moodEvent = await prisma.moodEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodEventCreateManyArgs>(args?: SelectSubset<T, MoodEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodEvents and returns the data saved in the database.
     * @param {MoodEventCreateManyAndReturnArgs} args - Arguments to create many MoodEvents.
     * @example
     * // Create many MoodEvents
     * const moodEvent = await prisma.moodEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodEvents and only return the `id`
     * const moodEventWithIdOnly = await prisma.moodEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodEvent.
     * @param {MoodEventDeleteArgs} args - Arguments to delete one MoodEvent.
     * @example
     * // Delete one MoodEvent
     * const MoodEvent = await prisma.moodEvent.delete({
     *   where: {
     *     // ... filter to delete one MoodEvent
     *   }
     * })
     * 
     */
    delete<T extends MoodEventDeleteArgs>(args: SelectSubset<T, MoodEventDeleteArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodEvent.
     * @param {MoodEventUpdateArgs} args - Arguments to update one MoodEvent.
     * @example
     * // Update one MoodEvent
     * const moodEvent = await prisma.moodEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodEventUpdateArgs>(args: SelectSubset<T, MoodEventUpdateArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodEvents.
     * @param {MoodEventDeleteManyArgs} args - Arguments to filter MoodEvents to delete.
     * @example
     * // Delete a few MoodEvents
     * const { count } = await prisma.moodEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodEventDeleteManyArgs>(args?: SelectSubset<T, MoodEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodEvents
     * const moodEvent = await prisma.moodEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodEventUpdateManyArgs>(args: SelectSubset<T, MoodEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEvents and returns the data updated in the database.
     * @param {MoodEventUpdateManyAndReturnArgs} args - Arguments to update many MoodEvents.
     * @example
     * // Update many MoodEvents
     * const moodEvent = await prisma.moodEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodEvents and only return the `id`
     * const moodEventWithIdOnly = await prisma.moodEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodEvent.
     * @param {MoodEventUpsertArgs} args - Arguments to update or create a MoodEvent.
     * @example
     * // Update or create a MoodEvent
     * const moodEvent = await prisma.moodEvent.upsert({
     *   create: {
     *     // ... data to create a MoodEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodEvent we want to update
     *   }
     * })
     */
    upsert<T extends MoodEventUpsertArgs>(args: SelectSubset<T, MoodEventUpsertArgs<ExtArgs>>): Prisma__MoodEventClient<$Result.GetResult<Prisma.$MoodEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventCountArgs} args - Arguments to filter MoodEvents to count.
     * @example
     * // Count the number of MoodEvents
     * const count = await prisma.moodEvent.count({
     *   where: {
     *     // ... the filter for the MoodEvents we want to count
     *   }
     * })
    **/
    count<T extends MoodEventCountArgs>(
      args?: Subset<T, MoodEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodEventAggregateArgs>(args: Subset<T, MoodEventAggregateArgs>): Prisma.PrismaPromise<GetMoodEventAggregateType<T>>

    /**
     * Group by MoodEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodEventGroupByArgs['orderBy'] }
        : { orderBy?: MoodEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodEvent model
   */
  readonly fields: MoodEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodEvent model
   */
  interface MoodEventFieldRefs {
    readonly id: FieldRef<"MoodEvent", 'String'>
    readonly userId: FieldRef<"MoodEvent", 'String'>
    readonly mood: FieldRef<"MoodEvent", 'String'>
    readonly source: FieldRef<"MoodEvent", 'MoodSource'>
    readonly metadata: FieldRef<"MoodEvent", 'Json'>
    readonly createdAt: FieldRef<"MoodEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodEvent findUnique
   */
  export type MoodEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter, which MoodEvent to fetch.
     */
    where: MoodEventWhereUniqueInput
  }

  /**
   * MoodEvent findUniqueOrThrow
   */
  export type MoodEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter, which MoodEvent to fetch.
     */
    where: MoodEventWhereUniqueInput
  }

  /**
   * MoodEvent findFirst
   */
  export type MoodEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter, which MoodEvent to fetch.
     */
    where?: MoodEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEvents to fetch.
     */
    orderBy?: MoodEventOrderByWithRelationInput | MoodEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEvents.
     */
    cursor?: MoodEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEvents.
     */
    distinct?: MoodEventScalarFieldEnum | MoodEventScalarFieldEnum[]
  }

  /**
   * MoodEvent findFirstOrThrow
   */
  export type MoodEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter, which MoodEvent to fetch.
     */
    where?: MoodEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEvents to fetch.
     */
    orderBy?: MoodEventOrderByWithRelationInput | MoodEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEvents.
     */
    cursor?: MoodEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEvents.
     */
    distinct?: MoodEventScalarFieldEnum | MoodEventScalarFieldEnum[]
  }

  /**
   * MoodEvent findMany
   */
  export type MoodEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter, which MoodEvents to fetch.
     */
    where?: MoodEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEvents to fetch.
     */
    orderBy?: MoodEventOrderByWithRelationInput | MoodEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodEvents.
     */
    cursor?: MoodEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEvents.
     */
    skip?: number
    distinct?: MoodEventScalarFieldEnum | MoodEventScalarFieldEnum[]
  }

  /**
   * MoodEvent create
   */
  export type MoodEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodEvent.
     */
    data: XOR<MoodEventCreateInput, MoodEventUncheckedCreateInput>
  }

  /**
   * MoodEvent createMany
   */
  export type MoodEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodEvents.
     */
    data: MoodEventCreateManyInput | MoodEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodEvent createManyAndReturn
   */
  export type MoodEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * The data used to create many MoodEvents.
     */
    data: MoodEventCreateManyInput | MoodEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEvent update
   */
  export type MoodEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodEvent.
     */
    data: XOR<MoodEventUpdateInput, MoodEventUncheckedUpdateInput>
    /**
     * Choose, which MoodEvent to update.
     */
    where: MoodEventWhereUniqueInput
  }

  /**
   * MoodEvent updateMany
   */
  export type MoodEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodEvents.
     */
    data: XOR<MoodEventUpdateManyMutationInput, MoodEventUncheckedUpdateManyInput>
    /**
     * Filter which MoodEvents to update
     */
    where?: MoodEventWhereInput
    /**
     * Limit how many MoodEvents to update.
     */
    limit?: number
  }

  /**
   * MoodEvent updateManyAndReturn
   */
  export type MoodEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * The data used to update MoodEvents.
     */
    data: XOR<MoodEventUpdateManyMutationInput, MoodEventUncheckedUpdateManyInput>
    /**
     * Filter which MoodEvents to update
     */
    where?: MoodEventWhereInput
    /**
     * Limit how many MoodEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEvent upsert
   */
  export type MoodEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodEvent to update in case it exists.
     */
    where: MoodEventWhereUniqueInput
    /**
     * In case the MoodEvent found by the `where` argument doesn't exist, create a new MoodEvent with this data.
     */
    create: XOR<MoodEventCreateInput, MoodEventUncheckedCreateInput>
    /**
     * In case the MoodEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodEventUpdateInput, MoodEventUncheckedUpdateInput>
  }

  /**
   * MoodEvent delete
   */
  export type MoodEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
    /**
     * Filter which MoodEvent to delete.
     */
    where: MoodEventWhereUniqueInput
  }

  /**
   * MoodEvent deleteMany
   */
  export type MoodEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEvents to delete
     */
    where?: MoodEventWhereInput
    /**
     * Limit how many MoodEvents to delete.
     */
    limit?: number
  }

  /**
   * MoodEvent without action
   */
  export type MoodEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEvent
     */
    select?: MoodEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEvent
     */
    omit?: MoodEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEventInclude<ExtArgs> | null
  }


  /**
   * Model ListeningEvent
   */

  export type AggregateListeningEvent = {
    _count: ListeningEventCountAggregateOutputType | null
    _avg: ListeningEventAvgAggregateOutputType | null
    _sum: ListeningEventSumAggregateOutputType | null
    _min: ListeningEventMinAggregateOutputType | null
    _max: ListeningEventMaxAggregateOutputType | null
  }

  export type ListeningEventAvgAggregateOutputType = {
    progressMs: number | null
  }

  export type ListeningEventSumAggregateOutputType = {
    progressMs: number | null
  }

  export type ListeningEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trackId: string | null
    progressMs: number | null
    occurredAt: Date | null
  }

  export type ListeningEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trackId: string | null
    progressMs: number | null
    occurredAt: Date | null
  }

  export type ListeningEventCountAggregateOutputType = {
    id: number
    userId: number
    trackId: number
    progressMs: number
    occurredAt: number
    _all: number
  }


  export type ListeningEventAvgAggregateInputType = {
    progressMs?: true
  }

  export type ListeningEventSumAggregateInputType = {
    progressMs?: true
  }

  export type ListeningEventMinAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    progressMs?: true
    occurredAt?: true
  }

  export type ListeningEventMaxAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    progressMs?: true
    occurredAt?: true
  }

  export type ListeningEventCountAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    progressMs?: true
    occurredAt?: true
    _all?: true
  }

  export type ListeningEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningEvent to aggregate.
     */
    where?: ListeningEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningEvents to fetch.
     */
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListeningEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListeningEvents
    **/
    _count?: true | ListeningEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListeningEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListeningEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListeningEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListeningEventMaxAggregateInputType
  }

  export type GetListeningEventAggregateType<T extends ListeningEventAggregateArgs> = {
        [P in keyof T & keyof AggregateListeningEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListeningEvent[P]>
      : GetScalarType<T[P], AggregateListeningEvent[P]>
  }




  export type ListeningEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningEventWhereInput
    orderBy?: ListeningEventOrderByWithAggregationInput | ListeningEventOrderByWithAggregationInput[]
    by: ListeningEventScalarFieldEnum[] | ListeningEventScalarFieldEnum
    having?: ListeningEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListeningEventCountAggregateInputType | true
    _avg?: ListeningEventAvgAggregateInputType
    _sum?: ListeningEventSumAggregateInputType
    _min?: ListeningEventMinAggregateInputType
    _max?: ListeningEventMaxAggregateInputType
  }

  export type ListeningEventGroupByOutputType = {
    id: string
    userId: string
    trackId: string
    progressMs: number
    occurredAt: Date
    _count: ListeningEventCountAggregateOutputType | null
    _avg: ListeningEventAvgAggregateOutputType | null
    _sum: ListeningEventSumAggregateOutputType | null
    _min: ListeningEventMinAggregateOutputType | null
    _max: ListeningEventMaxAggregateOutputType | null
  }

  type GetListeningEventGroupByPayload<T extends ListeningEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListeningEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListeningEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListeningEventGroupByOutputType[P]>
            : GetScalarType<T[P], ListeningEventGroupByOutputType[P]>
        }
      >
    >


  export type ListeningEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    progressMs?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningEvent"]>

  export type ListeningEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    progressMs?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningEvent"]>

  export type ListeningEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    progressMs?: boolean
    occurredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningEvent"]>

  export type ListeningEventSelectScalar = {
    id?: boolean
    userId?: boolean
    trackId?: boolean
    progressMs?: boolean
    occurredAt?: boolean
  }

  export type ListeningEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trackId" | "progressMs" | "occurredAt", ExtArgs["result"]["listeningEvent"]>
  export type ListeningEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type ListeningEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type ListeningEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $ListeningEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListeningEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trackId: string
      progressMs: number
      occurredAt: Date
    }, ExtArgs["result"]["listeningEvent"]>
    composites: {}
  }

  type ListeningEventGetPayload<S extends boolean | null | undefined | ListeningEventDefaultArgs> = $Result.GetResult<Prisma.$ListeningEventPayload, S>

  type ListeningEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListeningEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListeningEventCountAggregateInputType | true
    }

  export interface ListeningEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListeningEvent'], meta: { name: 'ListeningEvent' } }
    /**
     * Find zero or one ListeningEvent that matches the filter.
     * @param {ListeningEventFindUniqueArgs} args - Arguments to find a ListeningEvent
     * @example
     * // Get one ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListeningEventFindUniqueArgs>(args: SelectSubset<T, ListeningEventFindUniqueArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListeningEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListeningEventFindUniqueOrThrowArgs} args - Arguments to find a ListeningEvent
     * @example
     * // Get one ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListeningEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ListeningEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListeningEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventFindFirstArgs} args - Arguments to find a ListeningEvent
     * @example
     * // Get one ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListeningEventFindFirstArgs>(args?: SelectSubset<T, ListeningEventFindFirstArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListeningEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventFindFirstOrThrowArgs} args - Arguments to find a ListeningEvent
     * @example
     * // Get one ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListeningEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ListeningEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListeningEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListeningEvents
     * const listeningEvents = await prisma.listeningEvent.findMany()
     * 
     * // Get first 10 ListeningEvents
     * const listeningEvents = await prisma.listeningEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listeningEventWithIdOnly = await prisma.listeningEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListeningEventFindManyArgs>(args?: SelectSubset<T, ListeningEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListeningEvent.
     * @param {ListeningEventCreateArgs} args - Arguments to create a ListeningEvent.
     * @example
     * // Create one ListeningEvent
     * const ListeningEvent = await prisma.listeningEvent.create({
     *   data: {
     *     // ... data to create a ListeningEvent
     *   }
     * })
     * 
     */
    create<T extends ListeningEventCreateArgs>(args: SelectSubset<T, ListeningEventCreateArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListeningEvents.
     * @param {ListeningEventCreateManyArgs} args - Arguments to create many ListeningEvents.
     * @example
     * // Create many ListeningEvents
     * const listeningEvent = await prisma.listeningEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListeningEventCreateManyArgs>(args?: SelectSubset<T, ListeningEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListeningEvents and returns the data saved in the database.
     * @param {ListeningEventCreateManyAndReturnArgs} args - Arguments to create many ListeningEvents.
     * @example
     * // Create many ListeningEvents
     * const listeningEvent = await prisma.listeningEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListeningEvents and only return the `id`
     * const listeningEventWithIdOnly = await prisma.listeningEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListeningEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ListeningEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListeningEvent.
     * @param {ListeningEventDeleteArgs} args - Arguments to delete one ListeningEvent.
     * @example
     * // Delete one ListeningEvent
     * const ListeningEvent = await prisma.listeningEvent.delete({
     *   where: {
     *     // ... filter to delete one ListeningEvent
     *   }
     * })
     * 
     */
    delete<T extends ListeningEventDeleteArgs>(args: SelectSubset<T, ListeningEventDeleteArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListeningEvent.
     * @param {ListeningEventUpdateArgs} args - Arguments to update one ListeningEvent.
     * @example
     * // Update one ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListeningEventUpdateArgs>(args: SelectSubset<T, ListeningEventUpdateArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListeningEvents.
     * @param {ListeningEventDeleteManyArgs} args - Arguments to filter ListeningEvents to delete.
     * @example
     * // Delete a few ListeningEvents
     * const { count } = await prisma.listeningEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListeningEventDeleteManyArgs>(args?: SelectSubset<T, ListeningEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListeningEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListeningEvents
     * const listeningEvent = await prisma.listeningEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListeningEventUpdateManyArgs>(args: SelectSubset<T, ListeningEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListeningEvents and returns the data updated in the database.
     * @param {ListeningEventUpdateManyAndReturnArgs} args - Arguments to update many ListeningEvents.
     * @example
     * // Update many ListeningEvents
     * const listeningEvent = await prisma.listeningEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListeningEvents and only return the `id`
     * const listeningEventWithIdOnly = await prisma.listeningEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListeningEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ListeningEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListeningEvent.
     * @param {ListeningEventUpsertArgs} args - Arguments to update or create a ListeningEvent.
     * @example
     * // Update or create a ListeningEvent
     * const listeningEvent = await prisma.listeningEvent.upsert({
     *   create: {
     *     // ... data to create a ListeningEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListeningEvent we want to update
     *   }
     * })
     */
    upsert<T extends ListeningEventUpsertArgs>(args: SelectSubset<T, ListeningEventUpsertArgs<ExtArgs>>): Prisma__ListeningEventClient<$Result.GetResult<Prisma.$ListeningEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListeningEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventCountArgs} args - Arguments to filter ListeningEvents to count.
     * @example
     * // Count the number of ListeningEvents
     * const count = await prisma.listeningEvent.count({
     *   where: {
     *     // ... the filter for the ListeningEvents we want to count
     *   }
     * })
    **/
    count<T extends ListeningEventCountArgs>(
      args?: Subset<T, ListeningEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListeningEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListeningEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListeningEventAggregateArgs>(args: Subset<T, ListeningEventAggregateArgs>): Prisma.PrismaPromise<GetListeningEventAggregateType<T>>

    /**
     * Group by ListeningEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListeningEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListeningEventGroupByArgs['orderBy'] }
        : { orderBy?: ListeningEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListeningEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListeningEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListeningEvent model
   */
  readonly fields: ListeningEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListeningEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListeningEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListeningEvent model
   */
  interface ListeningEventFieldRefs {
    readonly id: FieldRef<"ListeningEvent", 'String'>
    readonly userId: FieldRef<"ListeningEvent", 'String'>
    readonly trackId: FieldRef<"ListeningEvent", 'String'>
    readonly progressMs: FieldRef<"ListeningEvent", 'Int'>
    readonly occurredAt: FieldRef<"ListeningEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListeningEvent findUnique
   */
  export type ListeningEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter, which ListeningEvent to fetch.
     */
    where: ListeningEventWhereUniqueInput
  }

  /**
   * ListeningEvent findUniqueOrThrow
   */
  export type ListeningEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter, which ListeningEvent to fetch.
     */
    where: ListeningEventWhereUniqueInput
  }

  /**
   * ListeningEvent findFirst
   */
  export type ListeningEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter, which ListeningEvent to fetch.
     */
    where?: ListeningEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningEvents to fetch.
     */
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListeningEvents.
     */
    cursor?: ListeningEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListeningEvents.
     */
    distinct?: ListeningEventScalarFieldEnum | ListeningEventScalarFieldEnum[]
  }

  /**
   * ListeningEvent findFirstOrThrow
   */
  export type ListeningEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter, which ListeningEvent to fetch.
     */
    where?: ListeningEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningEvents to fetch.
     */
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListeningEvents.
     */
    cursor?: ListeningEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListeningEvents.
     */
    distinct?: ListeningEventScalarFieldEnum | ListeningEventScalarFieldEnum[]
  }

  /**
   * ListeningEvent findMany
   */
  export type ListeningEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter, which ListeningEvents to fetch.
     */
    where?: ListeningEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningEvents to fetch.
     */
    orderBy?: ListeningEventOrderByWithRelationInput | ListeningEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListeningEvents.
     */
    cursor?: ListeningEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningEvents.
     */
    skip?: number
    distinct?: ListeningEventScalarFieldEnum | ListeningEventScalarFieldEnum[]
  }

  /**
   * ListeningEvent create
   */
  export type ListeningEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ListeningEvent.
     */
    data: XOR<ListeningEventCreateInput, ListeningEventUncheckedCreateInput>
  }

  /**
   * ListeningEvent createMany
   */
  export type ListeningEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListeningEvents.
     */
    data: ListeningEventCreateManyInput | ListeningEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListeningEvent createManyAndReturn
   */
  export type ListeningEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * The data used to create many ListeningEvents.
     */
    data: ListeningEventCreateManyInput | ListeningEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListeningEvent update
   */
  export type ListeningEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ListeningEvent.
     */
    data: XOR<ListeningEventUpdateInput, ListeningEventUncheckedUpdateInput>
    /**
     * Choose, which ListeningEvent to update.
     */
    where: ListeningEventWhereUniqueInput
  }

  /**
   * ListeningEvent updateMany
   */
  export type ListeningEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListeningEvents.
     */
    data: XOR<ListeningEventUpdateManyMutationInput, ListeningEventUncheckedUpdateManyInput>
    /**
     * Filter which ListeningEvents to update
     */
    where?: ListeningEventWhereInput
    /**
     * Limit how many ListeningEvents to update.
     */
    limit?: number
  }

  /**
   * ListeningEvent updateManyAndReturn
   */
  export type ListeningEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * The data used to update ListeningEvents.
     */
    data: XOR<ListeningEventUpdateManyMutationInput, ListeningEventUncheckedUpdateManyInput>
    /**
     * Filter which ListeningEvents to update
     */
    where?: ListeningEventWhereInput
    /**
     * Limit how many ListeningEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListeningEvent upsert
   */
  export type ListeningEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ListeningEvent to update in case it exists.
     */
    where: ListeningEventWhereUniqueInput
    /**
     * In case the ListeningEvent found by the `where` argument doesn't exist, create a new ListeningEvent with this data.
     */
    create: XOR<ListeningEventCreateInput, ListeningEventUncheckedCreateInput>
    /**
     * In case the ListeningEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListeningEventUpdateInput, ListeningEventUncheckedUpdateInput>
  }

  /**
   * ListeningEvent delete
   */
  export type ListeningEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
    /**
     * Filter which ListeningEvent to delete.
     */
    where: ListeningEventWhereUniqueInput
  }

  /**
   * ListeningEvent deleteMany
   */
  export type ListeningEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningEvents to delete
     */
    where?: ListeningEventWhereInput
    /**
     * Limit how many ListeningEvents to delete.
     */
    limit?: number
  }

  /**
   * ListeningEvent without action
   */
  export type ListeningEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningEvent
     */
    select?: ListeningEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningEvent
     */
    omit?: ListeningEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningEventInclude<ExtArgs> | null
  }


  /**
   * Model ArtistFollow
   */

  export type AggregateArtistFollow = {
    _count: ArtistFollowCountAggregateOutputType | null
    _min: ArtistFollowMinAggregateOutputType | null
    _max: ArtistFollowMaxAggregateOutputType | null
  }

  export type ArtistFollowMinAggregateOutputType = {
    userId: string | null
    artistId: string | null
    createdAt: Date | null
  }

  export type ArtistFollowMaxAggregateOutputType = {
    userId: string | null
    artistId: string | null
    createdAt: Date | null
  }

  export type ArtistFollowCountAggregateOutputType = {
    userId: number
    artistId: number
    createdAt: number
    _all: number
  }


  export type ArtistFollowMinAggregateInputType = {
    userId?: true
    artistId?: true
    createdAt?: true
  }

  export type ArtistFollowMaxAggregateInputType = {
    userId?: true
    artistId?: true
    createdAt?: true
  }

  export type ArtistFollowCountAggregateInputType = {
    userId?: true
    artistId?: true
    createdAt?: true
    _all?: true
  }

  export type ArtistFollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistFollow to aggregate.
     */
    where?: ArtistFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistFollows to fetch.
     */
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistFollows
    **/
    _count?: true | ArtistFollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistFollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistFollowMaxAggregateInputType
  }

  export type GetArtistFollowAggregateType<T extends ArtistFollowAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistFollow[P]>
      : GetScalarType<T[P], AggregateArtistFollow[P]>
  }




  export type ArtistFollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistFollowWhereInput
    orderBy?: ArtistFollowOrderByWithAggregationInput | ArtistFollowOrderByWithAggregationInput[]
    by: ArtistFollowScalarFieldEnum[] | ArtistFollowScalarFieldEnum
    having?: ArtistFollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistFollowCountAggregateInputType | true
    _min?: ArtistFollowMinAggregateInputType
    _max?: ArtistFollowMaxAggregateInputType
  }

  export type ArtistFollowGroupByOutputType = {
    userId: string
    artistId: string
    createdAt: Date
    _count: ArtistFollowCountAggregateOutputType | null
    _min: ArtistFollowMinAggregateOutputType | null
    _max: ArtistFollowMaxAggregateOutputType | null
  }

  type GetArtistFollowGroupByPayload<T extends ArtistFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistFollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistFollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistFollowGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistFollowGroupByOutputType[P]>
        }
      >
    >


  export type ArtistFollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistFollow"]>

  export type ArtistFollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistFollow"]>

  export type ArtistFollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistFollow"]>

  export type ArtistFollowSelectScalar = {
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
  }

  export type ArtistFollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "artistId" | "createdAt", ExtArgs["result"]["artistFollow"]>
  export type ArtistFollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type ArtistFollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type ArtistFollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $ArtistFollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistFollow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      artistId: string
      createdAt: Date
    }, ExtArgs["result"]["artistFollow"]>
    composites: {}
  }

  type ArtistFollowGetPayload<S extends boolean | null | undefined | ArtistFollowDefaultArgs> = $Result.GetResult<Prisma.$ArtistFollowPayload, S>

  type ArtistFollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistFollowCountAggregateInputType | true
    }

  export interface ArtistFollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistFollow'], meta: { name: 'ArtistFollow' } }
    /**
     * Find zero or one ArtistFollow that matches the filter.
     * @param {ArtistFollowFindUniqueArgs} args - Arguments to find a ArtistFollow
     * @example
     * // Get one ArtistFollow
     * const artistFollow = await prisma.artistFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFollowFindUniqueArgs>(args: SelectSubset<T, ArtistFollowFindUniqueArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistFollow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFollowFindUniqueOrThrowArgs} args - Arguments to find a ArtistFollow
     * @example
     * // Get one ArtistFollow
     * const artistFollow = await prisma.artistFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFollowFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowFindFirstArgs} args - Arguments to find a ArtistFollow
     * @example
     * // Get one ArtistFollow
     * const artistFollow = await prisma.artistFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFollowFindFirstArgs>(args?: SelectSubset<T, ArtistFollowFindFirstArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistFollow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowFindFirstOrThrowArgs} args - Arguments to find a ArtistFollow
     * @example
     * // Get one ArtistFollow
     * const artistFollow = await prisma.artistFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFollowFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistFollows
     * const artistFollows = await prisma.artistFollow.findMany()
     * 
     * // Get first 10 ArtistFollows
     * const artistFollows = await prisma.artistFollow.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const artistFollowWithUserIdOnly = await prisma.artistFollow.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ArtistFollowFindManyArgs>(args?: SelectSubset<T, ArtistFollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistFollow.
     * @param {ArtistFollowCreateArgs} args - Arguments to create a ArtistFollow.
     * @example
     * // Create one ArtistFollow
     * const ArtistFollow = await prisma.artistFollow.create({
     *   data: {
     *     // ... data to create a ArtistFollow
     *   }
     * })
     * 
     */
    create<T extends ArtistFollowCreateArgs>(args: SelectSubset<T, ArtistFollowCreateArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistFollows.
     * @param {ArtistFollowCreateManyArgs} args - Arguments to create many ArtistFollows.
     * @example
     * // Create many ArtistFollows
     * const artistFollow = await prisma.artistFollow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistFollowCreateManyArgs>(args?: SelectSubset<T, ArtistFollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistFollows and returns the data saved in the database.
     * @param {ArtistFollowCreateManyAndReturnArgs} args - Arguments to create many ArtistFollows.
     * @example
     * // Create many ArtistFollows
     * const artistFollow = await prisma.artistFollow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistFollows and only return the `userId`
     * const artistFollowWithUserIdOnly = await prisma.artistFollow.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistFollowCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistFollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistFollow.
     * @param {ArtistFollowDeleteArgs} args - Arguments to delete one ArtistFollow.
     * @example
     * // Delete one ArtistFollow
     * const ArtistFollow = await prisma.artistFollow.delete({
     *   where: {
     *     // ... filter to delete one ArtistFollow
     *   }
     * })
     * 
     */
    delete<T extends ArtistFollowDeleteArgs>(args: SelectSubset<T, ArtistFollowDeleteArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistFollow.
     * @param {ArtistFollowUpdateArgs} args - Arguments to update one ArtistFollow.
     * @example
     * // Update one ArtistFollow
     * const artistFollow = await prisma.artistFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistFollowUpdateArgs>(args: SelectSubset<T, ArtistFollowUpdateArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistFollows.
     * @param {ArtistFollowDeleteManyArgs} args - Arguments to filter ArtistFollows to delete.
     * @example
     * // Delete a few ArtistFollows
     * const { count } = await prisma.artistFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistFollowDeleteManyArgs>(args?: SelectSubset<T, ArtistFollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistFollows
     * const artistFollow = await prisma.artistFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistFollowUpdateManyArgs>(args: SelectSubset<T, ArtistFollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistFollows and returns the data updated in the database.
     * @param {ArtistFollowUpdateManyAndReturnArgs} args - Arguments to update many ArtistFollows.
     * @example
     * // Update many ArtistFollows
     * const artistFollow = await prisma.artistFollow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistFollows and only return the `userId`
     * const artistFollowWithUserIdOnly = await prisma.artistFollow.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistFollowUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistFollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistFollow.
     * @param {ArtistFollowUpsertArgs} args - Arguments to update or create a ArtistFollow.
     * @example
     * // Update or create a ArtistFollow
     * const artistFollow = await prisma.artistFollow.upsert({
     *   create: {
     *     // ... data to create a ArtistFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistFollow we want to update
     *   }
     * })
     */
    upsert<T extends ArtistFollowUpsertArgs>(args: SelectSubset<T, ArtistFollowUpsertArgs<ExtArgs>>): Prisma__ArtistFollowClient<$Result.GetResult<Prisma.$ArtistFollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowCountArgs} args - Arguments to filter ArtistFollows to count.
     * @example
     * // Count the number of ArtistFollows
     * const count = await prisma.artistFollow.count({
     *   where: {
     *     // ... the filter for the ArtistFollows we want to count
     *   }
     * })
    **/
    count<T extends ArtistFollowCountArgs>(
      args?: Subset<T, ArtistFollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistFollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistFollowAggregateArgs>(args: Subset<T, ArtistFollowAggregateArgs>): Prisma.PrismaPromise<GetArtistFollowAggregateType<T>>

    /**
     * Group by ArtistFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistFollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistFollowGroupByArgs['orderBy'] }
        : { orderBy?: ArtistFollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistFollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistFollow model
   */
  readonly fields: ArtistFollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistFollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtistFollow model
   */
  interface ArtistFollowFieldRefs {
    readonly userId: FieldRef<"ArtistFollow", 'String'>
    readonly artistId: FieldRef<"ArtistFollow", 'String'>
    readonly createdAt: FieldRef<"ArtistFollow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtistFollow findUnique
   */
  export type ArtistFollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter, which ArtistFollow to fetch.
     */
    where: ArtistFollowWhereUniqueInput
  }

  /**
   * ArtistFollow findUniqueOrThrow
   */
  export type ArtistFollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter, which ArtistFollow to fetch.
     */
    where: ArtistFollowWhereUniqueInput
  }

  /**
   * ArtistFollow findFirst
   */
  export type ArtistFollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter, which ArtistFollow to fetch.
     */
    where?: ArtistFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistFollows to fetch.
     */
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistFollows.
     */
    cursor?: ArtistFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistFollows.
     */
    distinct?: ArtistFollowScalarFieldEnum | ArtistFollowScalarFieldEnum[]
  }

  /**
   * ArtistFollow findFirstOrThrow
   */
  export type ArtistFollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter, which ArtistFollow to fetch.
     */
    where?: ArtistFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistFollows to fetch.
     */
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistFollows.
     */
    cursor?: ArtistFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistFollows.
     */
    distinct?: ArtistFollowScalarFieldEnum | ArtistFollowScalarFieldEnum[]
  }

  /**
   * ArtistFollow findMany
   */
  export type ArtistFollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter, which ArtistFollows to fetch.
     */
    where?: ArtistFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistFollows to fetch.
     */
    orderBy?: ArtistFollowOrderByWithRelationInput | ArtistFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistFollows.
     */
    cursor?: ArtistFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistFollows.
     */
    skip?: number
    distinct?: ArtistFollowScalarFieldEnum | ArtistFollowScalarFieldEnum[]
  }

  /**
   * ArtistFollow create
   */
  export type ArtistFollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistFollow.
     */
    data: XOR<ArtistFollowCreateInput, ArtistFollowUncheckedCreateInput>
  }

  /**
   * ArtistFollow createMany
   */
  export type ArtistFollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistFollows.
     */
    data: ArtistFollowCreateManyInput | ArtistFollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistFollow createManyAndReturn
   */
  export type ArtistFollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistFollows.
     */
    data: ArtistFollowCreateManyInput | ArtistFollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistFollow update
   */
  export type ArtistFollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistFollow.
     */
    data: XOR<ArtistFollowUpdateInput, ArtistFollowUncheckedUpdateInput>
    /**
     * Choose, which ArtistFollow to update.
     */
    where: ArtistFollowWhereUniqueInput
  }

  /**
   * ArtistFollow updateMany
   */
  export type ArtistFollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistFollows.
     */
    data: XOR<ArtistFollowUpdateManyMutationInput, ArtistFollowUncheckedUpdateManyInput>
    /**
     * Filter which ArtistFollows to update
     */
    where?: ArtistFollowWhereInput
    /**
     * Limit how many ArtistFollows to update.
     */
    limit?: number
  }

  /**
   * ArtistFollow updateManyAndReturn
   */
  export type ArtistFollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * The data used to update ArtistFollows.
     */
    data: XOR<ArtistFollowUpdateManyMutationInput, ArtistFollowUncheckedUpdateManyInput>
    /**
     * Filter which ArtistFollows to update
     */
    where?: ArtistFollowWhereInput
    /**
     * Limit how many ArtistFollows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistFollow upsert
   */
  export type ArtistFollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistFollow to update in case it exists.
     */
    where: ArtistFollowWhereUniqueInput
    /**
     * In case the ArtistFollow found by the `where` argument doesn't exist, create a new ArtistFollow with this data.
     */
    create: XOR<ArtistFollowCreateInput, ArtistFollowUncheckedCreateInput>
    /**
     * In case the ArtistFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistFollowUpdateInput, ArtistFollowUncheckedUpdateInput>
  }

  /**
   * ArtistFollow delete
   */
  export type ArtistFollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
    /**
     * Filter which ArtistFollow to delete.
     */
    where: ArtistFollowWhereUniqueInput
  }

  /**
   * ArtistFollow deleteMany
   */
  export type ArtistFollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistFollows to delete
     */
    where?: ArtistFollowWhereInput
    /**
     * Limit how many ArtistFollows to delete.
     */
    limit?: number
  }

  /**
   * ArtistFollow without action
   */
  export type ArtistFollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistFollow
     */
    select?: ArtistFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistFollow
     */
    omit?: ArtistFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistFollowInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteTrack
   */

  export type AggregateFavoriteTrack = {
    _count: FavoriteTrackCountAggregateOutputType | null
    _avg: FavoriteTrackAvgAggregateOutputType | null
    _sum: FavoriteTrackSumAggregateOutputType | null
    _min: FavoriteTrackMinAggregateOutputType | null
    _max: FavoriteTrackMaxAggregateOutputType | null
  }

  export type FavoriteTrackAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type FavoriteTrackSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type FavoriteTrackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    externalTrackId: string | null
    title: string | null
    artist: string | null
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    genre: string | null
    streamUrl: string | null
    createdAt: Date | null
  }

  export type FavoriteTrackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    externalTrackId: string | null
    title: string | null
    artist: string | null
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    genre: string | null
    streamUrl: string | null
    createdAt: Date | null
  }

  export type FavoriteTrackCountAggregateOutputType = {
    id: number
    userId: number
    externalTrackId: number
    title: number
    artist: number
    artistId: number
    album: number
    artworkUrl: number
    durationSeconds: number
    genre: number
    streamUrl: number
    createdAt: number
    _all: number
  }


  export type FavoriteTrackAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type FavoriteTrackSumAggregateInputType = {
    durationSeconds?: true
  }

  export type FavoriteTrackMinAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    createdAt?: true
  }

  export type FavoriteTrackMaxAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    createdAt?: true
  }

  export type FavoriteTrackCountAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteTrack to aggregate.
     */
    where?: FavoriteTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTracks to fetch.
     */
    orderBy?: FavoriteTrackOrderByWithRelationInput | FavoriteTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteTracks
    **/
    _count?: true | FavoriteTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteTrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteTrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteTrackMaxAggregateInputType
  }

  export type GetFavoriteTrackAggregateType<T extends FavoriteTrackAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteTrack[P]>
      : GetScalarType<T[P], AggregateFavoriteTrack[P]>
  }




  export type FavoriteTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteTrackWhereInput
    orderBy?: FavoriteTrackOrderByWithAggregationInput | FavoriteTrackOrderByWithAggregationInput[]
    by: FavoriteTrackScalarFieldEnum[] | FavoriteTrackScalarFieldEnum
    having?: FavoriteTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteTrackCountAggregateInputType | true
    _avg?: FavoriteTrackAvgAggregateInputType
    _sum?: FavoriteTrackSumAggregateInputType
    _min?: FavoriteTrackMinAggregateInputType
    _max?: FavoriteTrackMaxAggregateInputType
  }

  export type FavoriteTrackGroupByOutputType = {
    id: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number
    genre: string | null
    streamUrl: string | null
    createdAt: Date
    _count: FavoriteTrackCountAggregateOutputType | null
    _avg: FavoriteTrackAvgAggregateOutputType | null
    _sum: FavoriteTrackSumAggregateOutputType | null
    _min: FavoriteTrackMinAggregateOutputType | null
    _max: FavoriteTrackMaxAggregateOutputType | null
  }

  type GetFavoriteTrackGroupByPayload<T extends FavoriteTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteTrackGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteTrackGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrack"]>

  export type FavoriteTrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrack"]>

  export type FavoriteTrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteTrack"]>

  export type FavoriteTrackSelectScalar = {
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    createdAt?: boolean
  }

  export type FavoriteTrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "externalTrackId" | "title" | "artist" | "artistId" | "album" | "artworkUrl" | "durationSeconds" | "genre" | "streamUrl" | "createdAt", ExtArgs["result"]["favoriteTrack"]>
  export type FavoriteTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteTrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteTrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoriteTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteTrack"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      externalTrackId: string
      title: string
      artist: string
      artistId: string | null
      album: string | null
      artworkUrl: string | null
      durationSeconds: number
      genre: string | null
      streamUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["favoriteTrack"]>
    composites: {}
  }

  type FavoriteTrackGetPayload<S extends boolean | null | undefined | FavoriteTrackDefaultArgs> = $Result.GetResult<Prisma.$FavoriteTrackPayload, S>

  type FavoriteTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteTrackCountAggregateInputType | true
    }

  export interface FavoriteTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteTrack'], meta: { name: 'FavoriteTrack' } }
    /**
     * Find zero or one FavoriteTrack that matches the filter.
     * @param {FavoriteTrackFindUniqueArgs} args - Arguments to find a FavoriteTrack
     * @example
     * // Get one FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteTrackFindUniqueArgs>(args: SelectSubset<T, FavoriteTrackFindUniqueArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteTrackFindUniqueOrThrowArgs} args - Arguments to find a FavoriteTrack
     * @example
     * // Get one FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackFindFirstArgs} args - Arguments to find a FavoriteTrack
     * @example
     * // Get one FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteTrackFindFirstArgs>(args?: SelectSubset<T, FavoriteTrackFindFirstArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackFindFirstOrThrowArgs} args - Arguments to find a FavoriteTrack
     * @example
     * // Get one FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteTracks
     * const favoriteTracks = await prisma.favoriteTrack.findMany()
     * 
     * // Get first 10 FavoriteTracks
     * const favoriteTracks = await prisma.favoriteTrack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteTrackWithIdOnly = await prisma.favoriteTrack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteTrackFindManyArgs>(args?: SelectSubset<T, FavoriteTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteTrack.
     * @param {FavoriteTrackCreateArgs} args - Arguments to create a FavoriteTrack.
     * @example
     * // Create one FavoriteTrack
     * const FavoriteTrack = await prisma.favoriteTrack.create({
     *   data: {
     *     // ... data to create a FavoriteTrack
     *   }
     * })
     * 
     */
    create<T extends FavoriteTrackCreateArgs>(args: SelectSubset<T, FavoriteTrackCreateArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteTracks.
     * @param {FavoriteTrackCreateManyArgs} args - Arguments to create many FavoriteTracks.
     * @example
     * // Create many FavoriteTracks
     * const favoriteTrack = await prisma.favoriteTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteTrackCreateManyArgs>(args?: SelectSubset<T, FavoriteTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteTracks and returns the data saved in the database.
     * @param {FavoriteTrackCreateManyAndReturnArgs} args - Arguments to create many FavoriteTracks.
     * @example
     * // Create many FavoriteTracks
     * const favoriteTrack = await prisma.favoriteTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteTracks and only return the `id`
     * const favoriteTrackWithIdOnly = await prisma.favoriteTrack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteTrackCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteTrack.
     * @param {FavoriteTrackDeleteArgs} args - Arguments to delete one FavoriteTrack.
     * @example
     * // Delete one FavoriteTrack
     * const FavoriteTrack = await prisma.favoriteTrack.delete({
     *   where: {
     *     // ... filter to delete one FavoriteTrack
     *   }
     * })
     * 
     */
    delete<T extends FavoriteTrackDeleteArgs>(args: SelectSubset<T, FavoriteTrackDeleteArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteTrack.
     * @param {FavoriteTrackUpdateArgs} args - Arguments to update one FavoriteTrack.
     * @example
     * // Update one FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteTrackUpdateArgs>(args: SelectSubset<T, FavoriteTrackUpdateArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteTracks.
     * @param {FavoriteTrackDeleteManyArgs} args - Arguments to filter FavoriteTracks to delete.
     * @example
     * // Delete a few FavoriteTracks
     * const { count } = await prisma.favoriteTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteTrackDeleteManyArgs>(args?: SelectSubset<T, FavoriteTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteTracks
     * const favoriteTrack = await prisma.favoriteTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteTrackUpdateManyArgs>(args: SelectSubset<T, FavoriteTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteTracks and returns the data updated in the database.
     * @param {FavoriteTrackUpdateManyAndReturnArgs} args - Arguments to update many FavoriteTracks.
     * @example
     * // Update many FavoriteTracks
     * const favoriteTrack = await prisma.favoriteTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteTracks and only return the `id`
     * const favoriteTrackWithIdOnly = await prisma.favoriteTrack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteTrackUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteTrack.
     * @param {FavoriteTrackUpsertArgs} args - Arguments to update or create a FavoriteTrack.
     * @example
     * // Update or create a FavoriteTrack
     * const favoriteTrack = await prisma.favoriteTrack.upsert({
     *   create: {
     *     // ... data to create a FavoriteTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteTrack we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteTrackUpsertArgs>(args: SelectSubset<T, FavoriteTrackUpsertArgs<ExtArgs>>): Prisma__FavoriteTrackClient<$Result.GetResult<Prisma.$FavoriteTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackCountArgs} args - Arguments to filter FavoriteTracks to count.
     * @example
     * // Count the number of FavoriteTracks
     * const count = await prisma.favoriteTrack.count({
     *   where: {
     *     // ... the filter for the FavoriteTracks we want to count
     *   }
     * })
    **/
    count<T extends FavoriteTrackCountArgs>(
      args?: Subset<T, FavoriteTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteTrackAggregateArgs>(args: Subset<T, FavoriteTrackAggregateArgs>): Prisma.PrismaPromise<GetFavoriteTrackAggregateType<T>>

    /**
     * Group by FavoriteTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteTrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteTrackGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteTrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteTrack model
   */
  readonly fields: FavoriteTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteTrack model
   */
  interface FavoriteTrackFieldRefs {
    readonly id: FieldRef<"FavoriteTrack", 'String'>
    readonly userId: FieldRef<"FavoriteTrack", 'String'>
    readonly externalTrackId: FieldRef<"FavoriteTrack", 'String'>
    readonly title: FieldRef<"FavoriteTrack", 'String'>
    readonly artist: FieldRef<"FavoriteTrack", 'String'>
    readonly artistId: FieldRef<"FavoriteTrack", 'String'>
    readonly album: FieldRef<"FavoriteTrack", 'String'>
    readonly artworkUrl: FieldRef<"FavoriteTrack", 'String'>
    readonly durationSeconds: FieldRef<"FavoriteTrack", 'Int'>
    readonly genre: FieldRef<"FavoriteTrack", 'String'>
    readonly streamUrl: FieldRef<"FavoriteTrack", 'String'>
    readonly createdAt: FieldRef<"FavoriteTrack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteTrack findUnique
   */
  export type FavoriteTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrack to fetch.
     */
    where: FavoriteTrackWhereUniqueInput
  }

  /**
   * FavoriteTrack findUniqueOrThrow
   */
  export type FavoriteTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrack to fetch.
     */
    where: FavoriteTrackWhereUniqueInput
  }

  /**
   * FavoriteTrack findFirst
   */
  export type FavoriteTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrack to fetch.
     */
    where?: FavoriteTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTracks to fetch.
     */
    orderBy?: FavoriteTrackOrderByWithRelationInput | FavoriteTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteTracks.
     */
    cursor?: FavoriteTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteTracks.
     */
    distinct?: FavoriteTrackScalarFieldEnum | FavoriteTrackScalarFieldEnum[]
  }

  /**
   * FavoriteTrack findFirstOrThrow
   */
  export type FavoriteTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTrack to fetch.
     */
    where?: FavoriteTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTracks to fetch.
     */
    orderBy?: FavoriteTrackOrderByWithRelationInput | FavoriteTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteTracks.
     */
    cursor?: FavoriteTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteTracks.
     */
    distinct?: FavoriteTrackScalarFieldEnum | FavoriteTrackScalarFieldEnum[]
  }

  /**
   * FavoriteTrack findMany
   */
  export type FavoriteTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteTracks to fetch.
     */
    where?: FavoriteTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteTracks to fetch.
     */
    orderBy?: FavoriteTrackOrderByWithRelationInput | FavoriteTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteTracks.
     */
    cursor?: FavoriteTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteTracks.
     */
    skip?: number
    distinct?: FavoriteTrackScalarFieldEnum | FavoriteTrackScalarFieldEnum[]
  }

  /**
   * FavoriteTrack create
   */
  export type FavoriteTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteTrack.
     */
    data: XOR<FavoriteTrackCreateInput, FavoriteTrackUncheckedCreateInput>
  }

  /**
   * FavoriteTrack createMany
   */
  export type FavoriteTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteTracks.
     */
    data: FavoriteTrackCreateManyInput | FavoriteTrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteTrack createManyAndReturn
   */
  export type FavoriteTrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteTracks.
     */
    data: FavoriteTrackCreateManyInput | FavoriteTrackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteTrack update
   */
  export type FavoriteTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteTrack.
     */
    data: XOR<FavoriteTrackUpdateInput, FavoriteTrackUncheckedUpdateInput>
    /**
     * Choose, which FavoriteTrack to update.
     */
    where: FavoriteTrackWhereUniqueInput
  }

  /**
   * FavoriteTrack updateMany
   */
  export type FavoriteTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteTracks.
     */
    data: XOR<FavoriteTrackUpdateManyMutationInput, FavoriteTrackUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteTracks to update
     */
    where?: FavoriteTrackWhereInput
    /**
     * Limit how many FavoriteTracks to update.
     */
    limit?: number
  }

  /**
   * FavoriteTrack updateManyAndReturn
   */
  export type FavoriteTrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteTracks.
     */
    data: XOR<FavoriteTrackUpdateManyMutationInput, FavoriteTrackUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteTracks to update
     */
    where?: FavoriteTrackWhereInput
    /**
     * Limit how many FavoriteTracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteTrack upsert
   */
  export type FavoriteTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteTrack to update in case it exists.
     */
    where: FavoriteTrackWhereUniqueInput
    /**
     * In case the FavoriteTrack found by the `where` argument doesn't exist, create a new FavoriteTrack with this data.
     */
    create: XOR<FavoriteTrackCreateInput, FavoriteTrackUncheckedCreateInput>
    /**
     * In case the FavoriteTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteTrackUpdateInput, FavoriteTrackUncheckedUpdateInput>
  }

  /**
   * FavoriteTrack delete
   */
  export type FavoriteTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
    /**
     * Filter which FavoriteTrack to delete.
     */
    where: FavoriteTrackWhereUniqueInput
  }

  /**
   * FavoriteTrack deleteMany
   */
  export type FavoriteTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteTracks to delete
     */
    where?: FavoriteTrackWhereInput
    /**
     * Limit how many FavoriteTracks to delete.
     */
    limit?: number
  }

  /**
   * FavoriteTrack without action
   */
  export type FavoriteTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteTrack
     */
    select?: FavoriteTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteTrack
     */
    omit?: FavoriteTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteTrackInclude<ExtArgs> | null
  }


  /**
   * Model ListeningHistory
   */

  export type AggregateListeningHistory = {
    _count: ListeningHistoryCountAggregateOutputType | null
    _avg: ListeningHistoryAvgAggregateOutputType | null
    _sum: ListeningHistorySumAggregateOutputType | null
    _min: ListeningHistoryMinAggregateOutputType | null
    _max: ListeningHistoryMaxAggregateOutputType | null
  }

  export type ListeningHistoryAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type ListeningHistorySumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type ListeningHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    externalTrackId: string | null
    title: string | null
    artist: string | null
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    genre: string | null
    streamUrl: string | null
    playedAt: Date | null
  }

  export type ListeningHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    externalTrackId: string | null
    title: string | null
    artist: string | null
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number | null
    genre: string | null
    streamUrl: string | null
    playedAt: Date | null
  }

  export type ListeningHistoryCountAggregateOutputType = {
    id: number
    userId: number
    externalTrackId: number
    title: number
    artist: number
    artistId: number
    album: number
    artworkUrl: number
    durationSeconds: number
    genre: number
    streamUrl: number
    playedAt: number
    _all: number
  }


  export type ListeningHistoryAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type ListeningHistorySumAggregateInputType = {
    durationSeconds?: true
  }

  export type ListeningHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    playedAt?: true
  }

  export type ListeningHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    playedAt?: true
  }

  export type ListeningHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    externalTrackId?: true
    title?: true
    artist?: true
    artistId?: true
    album?: true
    artworkUrl?: true
    durationSeconds?: true
    genre?: true
    streamUrl?: true
    playedAt?: true
    _all?: true
  }

  export type ListeningHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningHistory to aggregate.
     */
    where?: ListeningHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningHistories to fetch.
     */
    orderBy?: ListeningHistoryOrderByWithRelationInput | ListeningHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListeningHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListeningHistories
    **/
    _count?: true | ListeningHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListeningHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListeningHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListeningHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListeningHistoryMaxAggregateInputType
  }

  export type GetListeningHistoryAggregateType<T extends ListeningHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateListeningHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListeningHistory[P]>
      : GetScalarType<T[P], AggregateListeningHistory[P]>
  }




  export type ListeningHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningHistoryWhereInput
    orderBy?: ListeningHistoryOrderByWithAggregationInput | ListeningHistoryOrderByWithAggregationInput[]
    by: ListeningHistoryScalarFieldEnum[] | ListeningHistoryScalarFieldEnum
    having?: ListeningHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListeningHistoryCountAggregateInputType | true
    _avg?: ListeningHistoryAvgAggregateInputType
    _sum?: ListeningHistorySumAggregateInputType
    _min?: ListeningHistoryMinAggregateInputType
    _max?: ListeningHistoryMaxAggregateInputType
  }

  export type ListeningHistoryGroupByOutputType = {
    id: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId: string | null
    album: string | null
    artworkUrl: string | null
    durationSeconds: number
    genre: string | null
    streamUrl: string | null
    playedAt: Date
    _count: ListeningHistoryCountAggregateOutputType | null
    _avg: ListeningHistoryAvgAggregateOutputType | null
    _sum: ListeningHistorySumAggregateOutputType | null
    _min: ListeningHistoryMinAggregateOutputType | null
    _max: ListeningHistoryMaxAggregateOutputType | null
  }

  type GetListeningHistoryGroupByPayload<T extends ListeningHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListeningHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListeningHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListeningHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ListeningHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ListeningHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    playedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningHistory"]>

  export type ListeningHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    playedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningHistory"]>

  export type ListeningHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    playedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listeningHistory"]>

  export type ListeningHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    externalTrackId?: boolean
    title?: boolean
    artist?: boolean
    artistId?: boolean
    album?: boolean
    artworkUrl?: boolean
    durationSeconds?: boolean
    genre?: boolean
    streamUrl?: boolean
    playedAt?: boolean
  }

  export type ListeningHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "externalTrackId" | "title" | "artist" | "artistId" | "album" | "artworkUrl" | "durationSeconds" | "genre" | "streamUrl" | "playedAt", ExtArgs["result"]["listeningHistory"]>
  export type ListeningHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListeningHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListeningHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListeningHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListeningHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      externalTrackId: string
      title: string
      artist: string
      artistId: string | null
      album: string | null
      artworkUrl: string | null
      durationSeconds: number
      genre: string | null
      streamUrl: string | null
      playedAt: Date
    }, ExtArgs["result"]["listeningHistory"]>
    composites: {}
  }

  type ListeningHistoryGetPayload<S extends boolean | null | undefined | ListeningHistoryDefaultArgs> = $Result.GetResult<Prisma.$ListeningHistoryPayload, S>

  type ListeningHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListeningHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListeningHistoryCountAggregateInputType | true
    }

  export interface ListeningHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListeningHistory'], meta: { name: 'ListeningHistory' } }
    /**
     * Find zero or one ListeningHistory that matches the filter.
     * @param {ListeningHistoryFindUniqueArgs} args - Arguments to find a ListeningHistory
     * @example
     * // Get one ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListeningHistoryFindUniqueArgs>(args: SelectSubset<T, ListeningHistoryFindUniqueArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListeningHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListeningHistoryFindUniqueOrThrowArgs} args - Arguments to find a ListeningHistory
     * @example
     * // Get one ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListeningHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ListeningHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListeningHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryFindFirstArgs} args - Arguments to find a ListeningHistory
     * @example
     * // Get one ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListeningHistoryFindFirstArgs>(args?: SelectSubset<T, ListeningHistoryFindFirstArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListeningHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryFindFirstOrThrowArgs} args - Arguments to find a ListeningHistory
     * @example
     * // Get one ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListeningHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ListeningHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListeningHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListeningHistories
     * const listeningHistories = await prisma.listeningHistory.findMany()
     * 
     * // Get first 10 ListeningHistories
     * const listeningHistories = await prisma.listeningHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listeningHistoryWithIdOnly = await prisma.listeningHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListeningHistoryFindManyArgs>(args?: SelectSubset<T, ListeningHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListeningHistory.
     * @param {ListeningHistoryCreateArgs} args - Arguments to create a ListeningHistory.
     * @example
     * // Create one ListeningHistory
     * const ListeningHistory = await prisma.listeningHistory.create({
     *   data: {
     *     // ... data to create a ListeningHistory
     *   }
     * })
     * 
     */
    create<T extends ListeningHistoryCreateArgs>(args: SelectSubset<T, ListeningHistoryCreateArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListeningHistories.
     * @param {ListeningHistoryCreateManyArgs} args - Arguments to create many ListeningHistories.
     * @example
     * // Create many ListeningHistories
     * const listeningHistory = await prisma.listeningHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListeningHistoryCreateManyArgs>(args?: SelectSubset<T, ListeningHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListeningHistories and returns the data saved in the database.
     * @param {ListeningHistoryCreateManyAndReturnArgs} args - Arguments to create many ListeningHistories.
     * @example
     * // Create many ListeningHistories
     * const listeningHistory = await prisma.listeningHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListeningHistories and only return the `id`
     * const listeningHistoryWithIdOnly = await prisma.listeningHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListeningHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ListeningHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListeningHistory.
     * @param {ListeningHistoryDeleteArgs} args - Arguments to delete one ListeningHistory.
     * @example
     * // Delete one ListeningHistory
     * const ListeningHistory = await prisma.listeningHistory.delete({
     *   where: {
     *     // ... filter to delete one ListeningHistory
     *   }
     * })
     * 
     */
    delete<T extends ListeningHistoryDeleteArgs>(args: SelectSubset<T, ListeningHistoryDeleteArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListeningHistory.
     * @param {ListeningHistoryUpdateArgs} args - Arguments to update one ListeningHistory.
     * @example
     * // Update one ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListeningHistoryUpdateArgs>(args: SelectSubset<T, ListeningHistoryUpdateArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListeningHistories.
     * @param {ListeningHistoryDeleteManyArgs} args - Arguments to filter ListeningHistories to delete.
     * @example
     * // Delete a few ListeningHistories
     * const { count } = await prisma.listeningHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListeningHistoryDeleteManyArgs>(args?: SelectSubset<T, ListeningHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListeningHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListeningHistories
     * const listeningHistory = await prisma.listeningHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListeningHistoryUpdateManyArgs>(args: SelectSubset<T, ListeningHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListeningHistories and returns the data updated in the database.
     * @param {ListeningHistoryUpdateManyAndReturnArgs} args - Arguments to update many ListeningHistories.
     * @example
     * // Update many ListeningHistories
     * const listeningHistory = await prisma.listeningHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListeningHistories and only return the `id`
     * const listeningHistoryWithIdOnly = await prisma.listeningHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListeningHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ListeningHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListeningHistory.
     * @param {ListeningHistoryUpsertArgs} args - Arguments to update or create a ListeningHistory.
     * @example
     * // Update or create a ListeningHistory
     * const listeningHistory = await prisma.listeningHistory.upsert({
     *   create: {
     *     // ... data to create a ListeningHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListeningHistory we want to update
     *   }
     * })
     */
    upsert<T extends ListeningHistoryUpsertArgs>(args: SelectSubset<T, ListeningHistoryUpsertArgs<ExtArgs>>): Prisma__ListeningHistoryClient<$Result.GetResult<Prisma.$ListeningHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListeningHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryCountArgs} args - Arguments to filter ListeningHistories to count.
     * @example
     * // Count the number of ListeningHistories
     * const count = await prisma.listeningHistory.count({
     *   where: {
     *     // ... the filter for the ListeningHistories we want to count
     *   }
     * })
    **/
    count<T extends ListeningHistoryCountArgs>(
      args?: Subset<T, ListeningHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListeningHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListeningHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListeningHistoryAggregateArgs>(args: Subset<T, ListeningHistoryAggregateArgs>): Prisma.PrismaPromise<GetListeningHistoryAggregateType<T>>

    /**
     * Group by ListeningHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListeningHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListeningHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ListeningHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListeningHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListeningHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListeningHistory model
   */
  readonly fields: ListeningHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListeningHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListeningHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListeningHistory model
   */
  interface ListeningHistoryFieldRefs {
    readonly id: FieldRef<"ListeningHistory", 'String'>
    readonly userId: FieldRef<"ListeningHistory", 'String'>
    readonly externalTrackId: FieldRef<"ListeningHistory", 'String'>
    readonly title: FieldRef<"ListeningHistory", 'String'>
    readonly artist: FieldRef<"ListeningHistory", 'String'>
    readonly artistId: FieldRef<"ListeningHistory", 'String'>
    readonly album: FieldRef<"ListeningHistory", 'String'>
    readonly artworkUrl: FieldRef<"ListeningHistory", 'String'>
    readonly durationSeconds: FieldRef<"ListeningHistory", 'Int'>
    readonly genre: FieldRef<"ListeningHistory", 'String'>
    readonly streamUrl: FieldRef<"ListeningHistory", 'String'>
    readonly playedAt: FieldRef<"ListeningHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListeningHistory findUnique
   */
  export type ListeningHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ListeningHistory to fetch.
     */
    where: ListeningHistoryWhereUniqueInput
  }

  /**
   * ListeningHistory findUniqueOrThrow
   */
  export type ListeningHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ListeningHistory to fetch.
     */
    where: ListeningHistoryWhereUniqueInput
  }

  /**
   * ListeningHistory findFirst
   */
  export type ListeningHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ListeningHistory to fetch.
     */
    where?: ListeningHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningHistories to fetch.
     */
    orderBy?: ListeningHistoryOrderByWithRelationInput | ListeningHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListeningHistories.
     */
    cursor?: ListeningHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListeningHistories.
     */
    distinct?: ListeningHistoryScalarFieldEnum | ListeningHistoryScalarFieldEnum[]
  }

  /**
   * ListeningHistory findFirstOrThrow
   */
  export type ListeningHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ListeningHistory to fetch.
     */
    where?: ListeningHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningHistories to fetch.
     */
    orderBy?: ListeningHistoryOrderByWithRelationInput | ListeningHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListeningHistories.
     */
    cursor?: ListeningHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListeningHistories.
     */
    distinct?: ListeningHistoryScalarFieldEnum | ListeningHistoryScalarFieldEnum[]
  }

  /**
   * ListeningHistory findMany
   */
  export type ListeningHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ListeningHistories to fetch.
     */
    where?: ListeningHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListeningHistories to fetch.
     */
    orderBy?: ListeningHistoryOrderByWithRelationInput | ListeningHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListeningHistories.
     */
    cursor?: ListeningHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListeningHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListeningHistories.
     */
    skip?: number
    distinct?: ListeningHistoryScalarFieldEnum | ListeningHistoryScalarFieldEnum[]
  }

  /**
   * ListeningHistory create
   */
  export type ListeningHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ListeningHistory.
     */
    data: XOR<ListeningHistoryCreateInput, ListeningHistoryUncheckedCreateInput>
  }

  /**
   * ListeningHistory createMany
   */
  export type ListeningHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListeningHistories.
     */
    data: ListeningHistoryCreateManyInput | ListeningHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListeningHistory createManyAndReturn
   */
  export type ListeningHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ListeningHistories.
     */
    data: ListeningHistoryCreateManyInput | ListeningHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListeningHistory update
   */
  export type ListeningHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ListeningHistory.
     */
    data: XOR<ListeningHistoryUpdateInput, ListeningHistoryUncheckedUpdateInput>
    /**
     * Choose, which ListeningHistory to update.
     */
    where: ListeningHistoryWhereUniqueInput
  }

  /**
   * ListeningHistory updateMany
   */
  export type ListeningHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListeningHistories.
     */
    data: XOR<ListeningHistoryUpdateManyMutationInput, ListeningHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ListeningHistories to update
     */
    where?: ListeningHistoryWhereInput
    /**
     * Limit how many ListeningHistories to update.
     */
    limit?: number
  }

  /**
   * ListeningHistory updateManyAndReturn
   */
  export type ListeningHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ListeningHistories.
     */
    data: XOR<ListeningHistoryUpdateManyMutationInput, ListeningHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ListeningHistories to update
     */
    where?: ListeningHistoryWhereInput
    /**
     * Limit how many ListeningHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListeningHistory upsert
   */
  export type ListeningHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ListeningHistory to update in case it exists.
     */
    where: ListeningHistoryWhereUniqueInput
    /**
     * In case the ListeningHistory found by the `where` argument doesn't exist, create a new ListeningHistory with this data.
     */
    create: XOR<ListeningHistoryCreateInput, ListeningHistoryUncheckedCreateInput>
    /**
     * In case the ListeningHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListeningHistoryUpdateInput, ListeningHistoryUncheckedUpdateInput>
  }

  /**
   * ListeningHistory delete
   */
  export type ListeningHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
    /**
     * Filter which ListeningHistory to delete.
     */
    where: ListeningHistoryWhereUniqueInput
  }

  /**
   * ListeningHistory deleteMany
   */
  export type ListeningHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningHistories to delete
     */
    where?: ListeningHistoryWhereInput
    /**
     * Limit how many ListeningHistories to delete.
     */
    limit?: number
  }

  /**
   * ListeningHistory without action
   */
  export type ListeningHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningHistory
     */
    select?: ListeningHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListeningHistory
     */
    omit?: ListeningHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningHistoryInclude<ExtArgs> | null
  }


  /**
   * Model TrackedArtist
   */

  export type AggregateTrackedArtist = {
    _count: TrackedArtistCountAggregateOutputType | null
    _min: TrackedArtistMinAggregateOutputType | null
    _max: TrackedArtistMaxAggregateOutputType | null
  }

  export type TrackedArtistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    externalArtistId: string | null
    name: string | null
    handle: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type TrackedArtistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    externalArtistId: string | null
    name: string | null
    handle: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type TrackedArtistCountAggregateOutputType = {
    id: number
    userId: number
    externalArtistId: number
    name: number
    handle: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type TrackedArtistMinAggregateInputType = {
    id?: true
    userId?: true
    externalArtistId?: true
    name?: true
    handle?: true
    imageUrl?: true
    createdAt?: true
  }

  export type TrackedArtistMaxAggregateInputType = {
    id?: true
    userId?: true
    externalArtistId?: true
    name?: true
    handle?: true
    imageUrl?: true
    createdAt?: true
  }

  export type TrackedArtistCountAggregateInputType = {
    id?: true
    userId?: true
    externalArtistId?: true
    name?: true
    handle?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type TrackedArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedArtist to aggregate.
     */
    where?: TrackedArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedArtists to fetch.
     */
    orderBy?: TrackedArtistOrderByWithRelationInput | TrackedArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedArtists
    **/
    _count?: true | TrackedArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedArtistMaxAggregateInputType
  }

  export type GetTrackedArtistAggregateType<T extends TrackedArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedArtist[P]>
      : GetScalarType<T[P], AggregateTrackedArtist[P]>
  }




  export type TrackedArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedArtistWhereInput
    orderBy?: TrackedArtistOrderByWithAggregationInput | TrackedArtistOrderByWithAggregationInput[]
    by: TrackedArtistScalarFieldEnum[] | TrackedArtistScalarFieldEnum
    having?: TrackedArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedArtistCountAggregateInputType | true
    _min?: TrackedArtistMinAggregateInputType
    _max?: TrackedArtistMaxAggregateInputType
  }

  export type TrackedArtistGroupByOutputType = {
    id: string
    userId: string
    externalArtistId: string
    name: string
    handle: string | null
    imageUrl: string | null
    createdAt: Date
    _count: TrackedArtistCountAggregateOutputType | null
    _min: TrackedArtistMinAggregateOutputType | null
    _max: TrackedArtistMaxAggregateOutputType | null
  }

  type GetTrackedArtistGroupByPayload<T extends TrackedArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedArtistGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedArtistGroupByOutputType[P]>
        }
      >
    >


  export type TrackedArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalArtistId?: boolean
    name?: boolean
    handle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedArtist"]>

  export type TrackedArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalArtistId?: boolean
    name?: boolean
    handle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedArtist"]>

  export type TrackedArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalArtistId?: boolean
    name?: boolean
    handle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedArtist"]>

  export type TrackedArtistSelectScalar = {
    id?: boolean
    userId?: boolean
    externalArtistId?: boolean
    name?: boolean
    handle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type TrackedArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "externalArtistId" | "name" | "handle" | "imageUrl" | "createdAt", ExtArgs["result"]["trackedArtist"]>
  export type TrackedArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrackedArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrackedArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrackedArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedArtist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      externalArtistId: string
      name: string
      handle: string | null
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["trackedArtist"]>
    composites: {}
  }

  type TrackedArtistGetPayload<S extends boolean | null | undefined | TrackedArtistDefaultArgs> = $Result.GetResult<Prisma.$TrackedArtistPayload, S>

  type TrackedArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedArtistCountAggregateInputType | true
    }

  export interface TrackedArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedArtist'], meta: { name: 'TrackedArtist' } }
    /**
     * Find zero or one TrackedArtist that matches the filter.
     * @param {TrackedArtistFindUniqueArgs} args - Arguments to find a TrackedArtist
     * @example
     * // Get one TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedArtistFindUniqueArgs>(args: SelectSubset<T, TrackedArtistFindUniqueArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedArtist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedArtistFindUniqueOrThrowArgs} args - Arguments to find a TrackedArtist
     * @example
     * // Get one TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistFindFirstArgs} args - Arguments to find a TrackedArtist
     * @example
     * // Get one TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedArtistFindFirstArgs>(args?: SelectSubset<T, TrackedArtistFindFirstArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedArtist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistFindFirstOrThrowArgs} args - Arguments to find a TrackedArtist
     * @example
     * // Get one TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedArtists
     * const trackedArtists = await prisma.trackedArtist.findMany()
     * 
     * // Get first 10 TrackedArtists
     * const trackedArtists = await prisma.trackedArtist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedArtistWithIdOnly = await prisma.trackedArtist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackedArtistFindManyArgs>(args?: SelectSubset<T, TrackedArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedArtist.
     * @param {TrackedArtistCreateArgs} args - Arguments to create a TrackedArtist.
     * @example
     * // Create one TrackedArtist
     * const TrackedArtist = await prisma.trackedArtist.create({
     *   data: {
     *     // ... data to create a TrackedArtist
     *   }
     * })
     * 
     */
    create<T extends TrackedArtistCreateArgs>(args: SelectSubset<T, TrackedArtistCreateArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedArtists.
     * @param {TrackedArtistCreateManyArgs} args - Arguments to create many TrackedArtists.
     * @example
     * // Create many TrackedArtists
     * const trackedArtist = await prisma.trackedArtist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedArtistCreateManyArgs>(args?: SelectSubset<T, TrackedArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedArtists and returns the data saved in the database.
     * @param {TrackedArtistCreateManyAndReturnArgs} args - Arguments to create many TrackedArtists.
     * @example
     * // Create many TrackedArtists
     * const trackedArtist = await prisma.trackedArtist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedArtists and only return the `id`
     * const trackedArtistWithIdOnly = await prisma.trackedArtist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedArtist.
     * @param {TrackedArtistDeleteArgs} args - Arguments to delete one TrackedArtist.
     * @example
     * // Delete one TrackedArtist
     * const TrackedArtist = await prisma.trackedArtist.delete({
     *   where: {
     *     // ... filter to delete one TrackedArtist
     *   }
     * })
     * 
     */
    delete<T extends TrackedArtistDeleteArgs>(args: SelectSubset<T, TrackedArtistDeleteArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedArtist.
     * @param {TrackedArtistUpdateArgs} args - Arguments to update one TrackedArtist.
     * @example
     * // Update one TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedArtistUpdateArgs>(args: SelectSubset<T, TrackedArtistUpdateArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedArtists.
     * @param {TrackedArtistDeleteManyArgs} args - Arguments to filter TrackedArtists to delete.
     * @example
     * // Delete a few TrackedArtists
     * const { count } = await prisma.trackedArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedArtistDeleteManyArgs>(args?: SelectSubset<T, TrackedArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedArtists
     * const trackedArtist = await prisma.trackedArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedArtistUpdateManyArgs>(args: SelectSubset<T, TrackedArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedArtists and returns the data updated in the database.
     * @param {TrackedArtistUpdateManyAndReturnArgs} args - Arguments to update many TrackedArtists.
     * @example
     * // Update many TrackedArtists
     * const trackedArtist = await prisma.trackedArtist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedArtists and only return the `id`
     * const trackedArtistWithIdOnly = await prisma.trackedArtist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackedArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedArtist.
     * @param {TrackedArtistUpsertArgs} args - Arguments to update or create a TrackedArtist.
     * @example
     * // Update or create a TrackedArtist
     * const trackedArtist = await prisma.trackedArtist.upsert({
     *   create: {
     *     // ... data to create a TrackedArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedArtist we want to update
     *   }
     * })
     */
    upsert<T extends TrackedArtistUpsertArgs>(args: SelectSubset<T, TrackedArtistUpsertArgs<ExtArgs>>): Prisma__TrackedArtistClient<$Result.GetResult<Prisma.$TrackedArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistCountArgs} args - Arguments to filter TrackedArtists to count.
     * @example
     * // Count the number of TrackedArtists
     * const count = await prisma.trackedArtist.count({
     *   where: {
     *     // ... the filter for the TrackedArtists we want to count
     *   }
     * })
    **/
    count<T extends TrackedArtistCountArgs>(
      args?: Subset<T, TrackedArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackedArtistAggregateArgs>(args: Subset<T, TrackedArtistAggregateArgs>): Prisma.PrismaPromise<GetTrackedArtistAggregateType<T>>

    /**
     * Group by TrackedArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackedArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedArtistGroupByArgs['orderBy'] }
        : { orderBy?: TrackedArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackedArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedArtist model
   */
  readonly fields: TrackedArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackedArtist model
   */
  interface TrackedArtistFieldRefs {
    readonly id: FieldRef<"TrackedArtist", 'String'>
    readonly userId: FieldRef<"TrackedArtist", 'String'>
    readonly externalArtistId: FieldRef<"TrackedArtist", 'String'>
    readonly name: FieldRef<"TrackedArtist", 'String'>
    readonly handle: FieldRef<"TrackedArtist", 'String'>
    readonly imageUrl: FieldRef<"TrackedArtist", 'String'>
    readonly createdAt: FieldRef<"TrackedArtist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackedArtist findUnique
   */
  export type TrackedArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter, which TrackedArtist to fetch.
     */
    where: TrackedArtistWhereUniqueInput
  }

  /**
   * TrackedArtist findUniqueOrThrow
   */
  export type TrackedArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter, which TrackedArtist to fetch.
     */
    where: TrackedArtistWhereUniqueInput
  }

  /**
   * TrackedArtist findFirst
   */
  export type TrackedArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter, which TrackedArtist to fetch.
     */
    where?: TrackedArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedArtists to fetch.
     */
    orderBy?: TrackedArtistOrderByWithRelationInput | TrackedArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedArtists.
     */
    cursor?: TrackedArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedArtists.
     */
    distinct?: TrackedArtistScalarFieldEnum | TrackedArtistScalarFieldEnum[]
  }

  /**
   * TrackedArtist findFirstOrThrow
   */
  export type TrackedArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter, which TrackedArtist to fetch.
     */
    where?: TrackedArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedArtists to fetch.
     */
    orderBy?: TrackedArtistOrderByWithRelationInput | TrackedArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedArtists.
     */
    cursor?: TrackedArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedArtists.
     */
    distinct?: TrackedArtistScalarFieldEnum | TrackedArtistScalarFieldEnum[]
  }

  /**
   * TrackedArtist findMany
   */
  export type TrackedArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter, which TrackedArtists to fetch.
     */
    where?: TrackedArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedArtists to fetch.
     */
    orderBy?: TrackedArtistOrderByWithRelationInput | TrackedArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedArtists.
     */
    cursor?: TrackedArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedArtists.
     */
    skip?: number
    distinct?: TrackedArtistScalarFieldEnum | TrackedArtistScalarFieldEnum[]
  }

  /**
   * TrackedArtist create
   */
  export type TrackedArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedArtist.
     */
    data: XOR<TrackedArtistCreateInput, TrackedArtistUncheckedCreateInput>
  }

  /**
   * TrackedArtist createMany
   */
  export type TrackedArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedArtists.
     */
    data: TrackedArtistCreateManyInput | TrackedArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedArtist createManyAndReturn
   */
  export type TrackedArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedArtists.
     */
    data: TrackedArtistCreateManyInput | TrackedArtistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedArtist update
   */
  export type TrackedArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedArtist.
     */
    data: XOR<TrackedArtistUpdateInput, TrackedArtistUncheckedUpdateInput>
    /**
     * Choose, which TrackedArtist to update.
     */
    where: TrackedArtistWhereUniqueInput
  }

  /**
   * TrackedArtist updateMany
   */
  export type TrackedArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedArtists.
     */
    data: XOR<TrackedArtistUpdateManyMutationInput, TrackedArtistUncheckedUpdateManyInput>
    /**
     * Filter which TrackedArtists to update
     */
    where?: TrackedArtistWhereInput
    /**
     * Limit how many TrackedArtists to update.
     */
    limit?: number
  }

  /**
   * TrackedArtist updateManyAndReturn
   */
  export type TrackedArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * The data used to update TrackedArtists.
     */
    data: XOR<TrackedArtistUpdateManyMutationInput, TrackedArtistUncheckedUpdateManyInput>
    /**
     * Filter which TrackedArtists to update
     */
    where?: TrackedArtistWhereInput
    /**
     * Limit how many TrackedArtists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedArtist upsert
   */
  export type TrackedArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedArtist to update in case it exists.
     */
    where: TrackedArtistWhereUniqueInput
    /**
     * In case the TrackedArtist found by the `where` argument doesn't exist, create a new TrackedArtist with this data.
     */
    create: XOR<TrackedArtistCreateInput, TrackedArtistUncheckedCreateInput>
    /**
     * In case the TrackedArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedArtistUpdateInput, TrackedArtistUncheckedUpdateInput>
  }

  /**
   * TrackedArtist delete
   */
  export type TrackedArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
    /**
     * Filter which TrackedArtist to delete.
     */
    where: TrackedArtistWhereUniqueInput
  }

  /**
   * TrackedArtist deleteMany
   */
  export type TrackedArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedArtists to delete
     */
    where?: TrackedArtistWhereInput
    /**
     * Limit how many TrackedArtists to delete.
     */
    limit?: number
  }

  /**
   * TrackedArtist without action
   */
  export type TrackedArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedArtist
     */
    select?: TrackedArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedArtist
     */
    omit?: TrackedArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedArtistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryCode: 'countryCode',
    imageUrl: 'imageUrl',
    monthlyListeners: 'monthlyListeners',
    createdAt: 'createdAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    title: 'title',
    album: 'album',
    artworkUrl: 'artworkUrl',
    durationSeconds: 'durationSeconds',
    artistId: 'artistId',
    audioFeatures: 'audioFeatures',
    createdAt: 'createdAt'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    coverUrl: 'coverUrl',
    source: 'source',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistTrackScalarFieldEnum: {
    playlistId: 'playlistId',
    trackId: 'trackId',
    position: 'position',
    addedAt: 'addedAt'
  };

  export type PlaylistTrackScalarFieldEnum = (typeof PlaylistTrackScalarFieldEnum)[keyof typeof PlaylistTrackScalarFieldEnum]


  export const MoodEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mood: 'mood',
    source: 'source',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type MoodEventScalarFieldEnum = (typeof MoodEventScalarFieldEnum)[keyof typeof MoodEventScalarFieldEnum]


  export const ListeningEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackId: 'trackId',
    progressMs: 'progressMs',
    occurredAt: 'occurredAt'
  };

  export type ListeningEventScalarFieldEnum = (typeof ListeningEventScalarFieldEnum)[keyof typeof ListeningEventScalarFieldEnum]


  export const ArtistFollowScalarFieldEnum: {
    userId: 'userId',
    artistId: 'artistId',
    createdAt: 'createdAt'
  };

  export type ArtistFollowScalarFieldEnum = (typeof ArtistFollowScalarFieldEnum)[keyof typeof ArtistFollowScalarFieldEnum]


  export const FavoriteTrackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    externalTrackId: 'externalTrackId',
    title: 'title',
    artist: 'artist',
    artistId: 'artistId',
    album: 'album',
    artworkUrl: 'artworkUrl',
    durationSeconds: 'durationSeconds',
    genre: 'genre',
    streamUrl: 'streamUrl',
    createdAt: 'createdAt'
  };

  export type FavoriteTrackScalarFieldEnum = (typeof FavoriteTrackScalarFieldEnum)[keyof typeof FavoriteTrackScalarFieldEnum]


  export const ListeningHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    externalTrackId: 'externalTrackId',
    title: 'title',
    artist: 'artist',
    artistId: 'artistId',
    album: 'album',
    artworkUrl: 'artworkUrl',
    durationSeconds: 'durationSeconds',
    genre: 'genre',
    streamUrl: 'streamUrl',
    playedAt: 'playedAt'
  };

  export type ListeningHistoryScalarFieldEnum = (typeof ListeningHistoryScalarFieldEnum)[keyof typeof ListeningHistoryScalarFieldEnum]


  export const TrackedArtistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    externalArtistId: 'externalArtistId',
    name: 'name',
    handle: 'handle',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type TrackedArtistScalarFieldEnum = (typeof TrackedArtistScalarFieldEnum)[keyof typeof TrackedArtistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PlaylistSource'
   */
  export type EnumPlaylistSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistSource'>
    


  /**
   * Reference to a field of type 'PlaylistSource[]'
   */
  export type ListEnumPlaylistSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistSource[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MoodSource'
   */
  export type EnumMoodSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodSource'>
    


  /**
   * Reference to a field of type 'MoodSource[]'
   */
  export type ListEnumMoodSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodSource[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    moodEvents?: MoodEventListRelationFilter
    listeningEvents?: ListeningEventListRelationFilter
    artistFollows?: ArtistFollowListRelationFilter
    favoriteTracks?: FavoriteTrackListRelationFilter
    listeningHistory?: ListeningHistoryListRelationFilter
    trackedArtists?: TrackedArtistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlists?: PlaylistOrderByRelationAggregateInput
    moodEvents?: MoodEventOrderByRelationAggregateInput
    listeningEvents?: ListeningEventOrderByRelationAggregateInput
    artistFollows?: ArtistFollowOrderByRelationAggregateInput
    favoriteTracks?: FavoriteTrackOrderByRelationAggregateInput
    listeningHistory?: ListeningHistoryOrderByRelationAggregateInput
    trackedArtists?: TrackedArtistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    moodEvents?: MoodEventListRelationFilter
    listeningEvents?: ListeningEventListRelationFilter
    artistFollows?: ArtistFollowListRelationFilter
    favoriteTracks?: FavoriteTrackListRelationFilter
    listeningHistory?: ListeningHistoryListRelationFilter
    trackedArtists?: TrackedArtistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: UuidFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    countryCode?: StringNullableFilter<"Artist"> | string | null
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    monthlyListeners?: IntNullableFilter<"Artist"> | number | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    tracks?: TrackListRelationFilter
    followers?: ArtistFollowListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    monthlyListeners?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tracks?: TrackOrderByRelationAggregateInput
    followers?: ArtistFollowOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    countryCode?: StringNullableFilter<"Artist"> | string | null
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    monthlyListeners?: IntNullableFilter<"Artist"> | number | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    tracks?: TrackListRelationFilter
    followers?: ArtistFollowListRelationFilter
  }, "id" | "name">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    monthlyListeners?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    countryCode?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    monthlyListeners?: IntNullableWithAggregatesFilter<"Artist"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: UuidFilter<"Track"> | string
    externalId?: StringNullableFilter<"Track"> | string | null
    title?: StringFilter<"Track"> | string
    album?: StringNullableFilter<"Track"> | string | null
    artworkUrl?: StringNullableFilter<"Track"> | string | null
    durationSeconds?: IntFilter<"Track"> | number
    artistId?: UuidFilter<"Track"> | string
    audioFeatures?: JsonNullableFilter<"Track">
    createdAt?: DateTimeFilter<"Track"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    playlistTracks?: PlaylistTrackListRelationFilter
    listeningEvents?: ListeningEventListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    title?: SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    artistId?: SortOrder
    audioFeatures?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    artist?: ArtistOrderByWithRelationInput
    playlistTracks?: PlaylistTrackOrderByRelationAggregateInput
    listeningEvents?: ListeningEventOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    title?: StringFilter<"Track"> | string
    album?: StringNullableFilter<"Track"> | string | null
    artworkUrl?: StringNullableFilter<"Track"> | string | null
    durationSeconds?: IntFilter<"Track"> | number
    artistId?: UuidFilter<"Track"> | string
    audioFeatures?: JsonNullableFilter<"Track">
    createdAt?: DateTimeFilter<"Track"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    playlistTracks?: PlaylistTrackListRelationFilter
    listeningEvents?: ListeningEventListRelationFilter
  }, "id" | "externalId">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    title?: SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    artistId?: SortOrder
    audioFeatures?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Track"> | string
    externalId?: StringNullableWithAggregatesFilter<"Track"> | string | null
    title?: StringWithAggregatesFilter<"Track"> | string
    album?: StringNullableWithAggregatesFilter<"Track"> | string | null
    artworkUrl?: StringNullableWithAggregatesFilter<"Track"> | string | null
    durationSeconds?: IntWithAggregatesFilter<"Track"> | number
    artistId?: UuidWithAggregatesFilter<"Track"> | string
    audioFeatures?: JsonNullableWithAggregatesFilter<"Track">
    createdAt?: DateTimeWithAggregatesFilter<"Track"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: UuidFilter<"Playlist"> | string
    ownerId?: UuidFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    source?: EnumPlaylistSourceFilter<"Playlist"> | $Enums.PlaylistSource
    isPublic?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tracks?: PlaylistTrackListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    source?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    tracks?: PlaylistTrackOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    ownerId?: UuidFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    source?: EnumPlaylistSourceFilter<"Playlist"> | $Enums.PlaylistSource
    isPublic?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tracks?: PlaylistTrackListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    source?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Playlist"> | string
    ownerId?: UuidWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    source?: EnumPlaylistSourceWithAggregatesFilter<"Playlist"> | $Enums.PlaylistSource
    isPublic?: BoolWithAggregatesFilter<"Playlist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type PlaylistTrackWhereInput = {
    AND?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    OR?: PlaylistTrackWhereInput[]
    NOT?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    playlistId?: UuidFilter<"PlaylistTrack"> | string
    trackId?: UuidFilter<"PlaylistTrack"> | string
    position?: IntFilter<"PlaylistTrack"> | number
    addedAt?: DateTimeFilter<"PlaylistTrack"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }

  export type PlaylistTrackOrderByWithRelationInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    position?: SortOrder
    addedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    track?: TrackOrderByWithRelationInput
  }

  export type PlaylistTrackWhereUniqueInput = Prisma.AtLeast<{
    playlistId_trackId?: PlaylistTrackPlaylistIdTrackIdCompoundUniqueInput
    AND?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    OR?: PlaylistTrackWhereInput[]
    NOT?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    playlistId?: UuidFilter<"PlaylistTrack"> | string
    trackId?: UuidFilter<"PlaylistTrack"> | string
    position?: IntFilter<"PlaylistTrack"> | number
    addedAt?: DateTimeFilter<"PlaylistTrack"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }, "playlistId_trackId">

  export type PlaylistTrackOrderByWithAggregationInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    position?: SortOrder
    addedAt?: SortOrder
    _count?: PlaylistTrackCountOrderByAggregateInput
    _avg?: PlaylistTrackAvgOrderByAggregateInput
    _max?: PlaylistTrackMaxOrderByAggregateInput
    _min?: PlaylistTrackMinOrderByAggregateInput
    _sum?: PlaylistTrackSumOrderByAggregateInput
  }

  export type PlaylistTrackScalarWhereWithAggregatesInput = {
    AND?: PlaylistTrackScalarWhereWithAggregatesInput | PlaylistTrackScalarWhereWithAggregatesInput[]
    OR?: PlaylistTrackScalarWhereWithAggregatesInput[]
    NOT?: PlaylistTrackScalarWhereWithAggregatesInput | PlaylistTrackScalarWhereWithAggregatesInput[]
    playlistId?: UuidWithAggregatesFilter<"PlaylistTrack"> | string
    trackId?: UuidWithAggregatesFilter<"PlaylistTrack"> | string
    position?: IntWithAggregatesFilter<"PlaylistTrack"> | number
    addedAt?: DateTimeWithAggregatesFilter<"PlaylistTrack"> | Date | string
  }

  export type MoodEventWhereInput = {
    AND?: MoodEventWhereInput | MoodEventWhereInput[]
    OR?: MoodEventWhereInput[]
    NOT?: MoodEventWhereInput | MoodEventWhereInput[]
    id?: UuidFilter<"MoodEvent"> | string
    userId?: UuidFilter<"MoodEvent"> | string
    mood?: StringFilter<"MoodEvent"> | string
    source?: EnumMoodSourceFilter<"MoodEvent"> | $Enums.MoodSource
    metadata?: JsonNullableFilter<"MoodEvent">
    createdAt?: DateTimeFilter<"MoodEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    source?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodEventWhereInput | MoodEventWhereInput[]
    OR?: MoodEventWhereInput[]
    NOT?: MoodEventWhereInput | MoodEventWhereInput[]
    userId?: UuidFilter<"MoodEvent"> | string
    mood?: StringFilter<"MoodEvent"> | string
    source?: EnumMoodSourceFilter<"MoodEvent"> | $Enums.MoodSource
    metadata?: JsonNullableFilter<"MoodEvent">
    createdAt?: DateTimeFilter<"MoodEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoodEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    source?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MoodEventCountOrderByAggregateInput
    _max?: MoodEventMaxOrderByAggregateInput
    _min?: MoodEventMinOrderByAggregateInput
  }

  export type MoodEventScalarWhereWithAggregatesInput = {
    AND?: MoodEventScalarWhereWithAggregatesInput | MoodEventScalarWhereWithAggregatesInput[]
    OR?: MoodEventScalarWhereWithAggregatesInput[]
    NOT?: MoodEventScalarWhereWithAggregatesInput | MoodEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MoodEvent"> | string
    userId?: UuidWithAggregatesFilter<"MoodEvent"> | string
    mood?: StringWithAggregatesFilter<"MoodEvent"> | string
    source?: EnumMoodSourceWithAggregatesFilter<"MoodEvent"> | $Enums.MoodSource
    metadata?: JsonNullableWithAggregatesFilter<"MoodEvent">
    createdAt?: DateTimeWithAggregatesFilter<"MoodEvent"> | Date | string
  }

  export type ListeningEventWhereInput = {
    AND?: ListeningEventWhereInput | ListeningEventWhereInput[]
    OR?: ListeningEventWhereInput[]
    NOT?: ListeningEventWhereInput | ListeningEventWhereInput[]
    id?: UuidFilter<"ListeningEvent"> | string
    userId?: UuidFilter<"ListeningEvent"> | string
    trackId?: UuidFilter<"ListeningEvent"> | string
    progressMs?: IntFilter<"ListeningEvent"> | number
    occurredAt?: DateTimeFilter<"ListeningEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }

  export type ListeningEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    progressMs?: SortOrder
    occurredAt?: SortOrder
    user?: UserOrderByWithRelationInput
    track?: TrackOrderByWithRelationInput
  }

  export type ListeningEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListeningEventWhereInput | ListeningEventWhereInput[]
    OR?: ListeningEventWhereInput[]
    NOT?: ListeningEventWhereInput | ListeningEventWhereInput[]
    userId?: UuidFilter<"ListeningEvent"> | string
    trackId?: UuidFilter<"ListeningEvent"> | string
    progressMs?: IntFilter<"ListeningEvent"> | number
    occurredAt?: DateTimeFilter<"ListeningEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }, "id">

  export type ListeningEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    progressMs?: SortOrder
    occurredAt?: SortOrder
    _count?: ListeningEventCountOrderByAggregateInput
    _avg?: ListeningEventAvgOrderByAggregateInput
    _max?: ListeningEventMaxOrderByAggregateInput
    _min?: ListeningEventMinOrderByAggregateInput
    _sum?: ListeningEventSumOrderByAggregateInput
  }

  export type ListeningEventScalarWhereWithAggregatesInput = {
    AND?: ListeningEventScalarWhereWithAggregatesInput | ListeningEventScalarWhereWithAggregatesInput[]
    OR?: ListeningEventScalarWhereWithAggregatesInput[]
    NOT?: ListeningEventScalarWhereWithAggregatesInput | ListeningEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ListeningEvent"> | string
    userId?: UuidWithAggregatesFilter<"ListeningEvent"> | string
    trackId?: UuidWithAggregatesFilter<"ListeningEvent"> | string
    progressMs?: IntWithAggregatesFilter<"ListeningEvent"> | number
    occurredAt?: DateTimeWithAggregatesFilter<"ListeningEvent"> | Date | string
  }

  export type ArtistFollowWhereInput = {
    AND?: ArtistFollowWhereInput | ArtistFollowWhereInput[]
    OR?: ArtistFollowWhereInput[]
    NOT?: ArtistFollowWhereInput | ArtistFollowWhereInput[]
    userId?: UuidFilter<"ArtistFollow"> | string
    artistId?: UuidFilter<"ArtistFollow"> | string
    createdAt?: DateTimeFilter<"ArtistFollow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }

  export type ArtistFollowOrderByWithRelationInput = {
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type ArtistFollowWhereUniqueInput = Prisma.AtLeast<{
    userId_artistId?: ArtistFollowUserIdArtistIdCompoundUniqueInput
    AND?: ArtistFollowWhereInput | ArtistFollowWhereInput[]
    OR?: ArtistFollowWhereInput[]
    NOT?: ArtistFollowWhereInput | ArtistFollowWhereInput[]
    userId?: UuidFilter<"ArtistFollow"> | string
    artistId?: UuidFilter<"ArtistFollow"> | string
    createdAt?: DateTimeFilter<"ArtistFollow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }, "userId_artistId">

  export type ArtistFollowOrderByWithAggregationInput = {
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    _count?: ArtistFollowCountOrderByAggregateInput
    _max?: ArtistFollowMaxOrderByAggregateInput
    _min?: ArtistFollowMinOrderByAggregateInput
  }

  export type ArtistFollowScalarWhereWithAggregatesInput = {
    AND?: ArtistFollowScalarWhereWithAggregatesInput | ArtistFollowScalarWhereWithAggregatesInput[]
    OR?: ArtistFollowScalarWhereWithAggregatesInput[]
    NOT?: ArtistFollowScalarWhereWithAggregatesInput | ArtistFollowScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"ArtistFollow"> | string
    artistId?: UuidWithAggregatesFilter<"ArtistFollow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArtistFollow"> | Date | string
  }

  export type FavoriteTrackWhereInput = {
    AND?: FavoriteTrackWhereInput | FavoriteTrackWhereInput[]
    OR?: FavoriteTrackWhereInput[]
    NOT?: FavoriteTrackWhereInput | FavoriteTrackWhereInput[]
    id?: UuidFilter<"FavoriteTrack"> | string
    userId?: UuidFilter<"FavoriteTrack"> | string
    externalTrackId?: StringFilter<"FavoriteTrack"> | string
    title?: StringFilter<"FavoriteTrack"> | string
    artist?: StringFilter<"FavoriteTrack"> | string
    artistId?: StringNullableFilter<"FavoriteTrack"> | string | null
    album?: StringNullableFilter<"FavoriteTrack"> | string | null
    artworkUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    durationSeconds?: IntFilter<"FavoriteTrack"> | number
    genre?: StringNullableFilter<"FavoriteTrack"> | string | null
    streamUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    createdAt?: DateTimeFilter<"FavoriteTrack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteTrackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_externalTrackId?: FavoriteTrackUserIdExternalTrackIdCompoundUniqueInput
    AND?: FavoriteTrackWhereInput | FavoriteTrackWhereInput[]
    OR?: FavoriteTrackWhereInput[]
    NOT?: FavoriteTrackWhereInput | FavoriteTrackWhereInput[]
    userId?: UuidFilter<"FavoriteTrack"> | string
    externalTrackId?: StringFilter<"FavoriteTrack"> | string
    title?: StringFilter<"FavoriteTrack"> | string
    artist?: StringFilter<"FavoriteTrack"> | string
    artistId?: StringNullableFilter<"FavoriteTrack"> | string | null
    album?: StringNullableFilter<"FavoriteTrack"> | string | null
    artworkUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    durationSeconds?: IntFilter<"FavoriteTrack"> | number
    genre?: StringNullableFilter<"FavoriteTrack"> | string | null
    streamUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    createdAt?: DateTimeFilter<"FavoriteTrack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_externalTrackId">

  export type FavoriteTrackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FavoriteTrackCountOrderByAggregateInput
    _avg?: FavoriteTrackAvgOrderByAggregateInput
    _max?: FavoriteTrackMaxOrderByAggregateInput
    _min?: FavoriteTrackMinOrderByAggregateInput
    _sum?: FavoriteTrackSumOrderByAggregateInput
  }

  export type FavoriteTrackScalarWhereWithAggregatesInput = {
    AND?: FavoriteTrackScalarWhereWithAggregatesInput | FavoriteTrackScalarWhereWithAggregatesInput[]
    OR?: FavoriteTrackScalarWhereWithAggregatesInput[]
    NOT?: FavoriteTrackScalarWhereWithAggregatesInput | FavoriteTrackScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FavoriteTrack"> | string
    userId?: UuidWithAggregatesFilter<"FavoriteTrack"> | string
    externalTrackId?: StringWithAggregatesFilter<"FavoriteTrack"> | string
    title?: StringWithAggregatesFilter<"FavoriteTrack"> | string
    artist?: StringWithAggregatesFilter<"FavoriteTrack"> | string
    artistId?: StringNullableWithAggregatesFilter<"FavoriteTrack"> | string | null
    album?: StringNullableWithAggregatesFilter<"FavoriteTrack"> | string | null
    artworkUrl?: StringNullableWithAggregatesFilter<"FavoriteTrack"> | string | null
    durationSeconds?: IntWithAggregatesFilter<"FavoriteTrack"> | number
    genre?: StringNullableWithAggregatesFilter<"FavoriteTrack"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"FavoriteTrack"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteTrack"> | Date | string
  }

  export type ListeningHistoryWhereInput = {
    AND?: ListeningHistoryWhereInput | ListeningHistoryWhereInput[]
    OR?: ListeningHistoryWhereInput[]
    NOT?: ListeningHistoryWhereInput | ListeningHistoryWhereInput[]
    id?: UuidFilter<"ListeningHistory"> | string
    userId?: UuidFilter<"ListeningHistory"> | string
    externalTrackId?: StringFilter<"ListeningHistory"> | string
    title?: StringFilter<"ListeningHistory"> | string
    artist?: StringFilter<"ListeningHistory"> | string
    artistId?: StringNullableFilter<"ListeningHistory"> | string | null
    album?: StringNullableFilter<"ListeningHistory"> | string | null
    artworkUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    durationSeconds?: IntFilter<"ListeningHistory"> | number
    genre?: StringNullableFilter<"ListeningHistory"> | string | null
    streamUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    playedAt?: DateTimeFilter<"ListeningHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListeningHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ListeningHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListeningHistoryWhereInput | ListeningHistoryWhereInput[]
    OR?: ListeningHistoryWhereInput[]
    NOT?: ListeningHistoryWhereInput | ListeningHistoryWhereInput[]
    userId?: UuidFilter<"ListeningHistory"> | string
    externalTrackId?: StringFilter<"ListeningHistory"> | string
    title?: StringFilter<"ListeningHistory"> | string
    artist?: StringFilter<"ListeningHistory"> | string
    artistId?: StringNullableFilter<"ListeningHistory"> | string | null
    album?: StringNullableFilter<"ListeningHistory"> | string | null
    artworkUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    durationSeconds?: IntFilter<"ListeningHistory"> | number
    genre?: StringNullableFilter<"ListeningHistory"> | string | null
    streamUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    playedAt?: DateTimeFilter<"ListeningHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ListeningHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    artworkUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    _count?: ListeningHistoryCountOrderByAggregateInput
    _avg?: ListeningHistoryAvgOrderByAggregateInput
    _max?: ListeningHistoryMaxOrderByAggregateInput
    _min?: ListeningHistoryMinOrderByAggregateInput
    _sum?: ListeningHistorySumOrderByAggregateInput
  }

  export type ListeningHistoryScalarWhereWithAggregatesInput = {
    AND?: ListeningHistoryScalarWhereWithAggregatesInput | ListeningHistoryScalarWhereWithAggregatesInput[]
    OR?: ListeningHistoryScalarWhereWithAggregatesInput[]
    NOT?: ListeningHistoryScalarWhereWithAggregatesInput | ListeningHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ListeningHistory"> | string
    userId?: UuidWithAggregatesFilter<"ListeningHistory"> | string
    externalTrackId?: StringWithAggregatesFilter<"ListeningHistory"> | string
    title?: StringWithAggregatesFilter<"ListeningHistory"> | string
    artist?: StringWithAggregatesFilter<"ListeningHistory"> | string
    artistId?: StringNullableWithAggregatesFilter<"ListeningHistory"> | string | null
    album?: StringNullableWithAggregatesFilter<"ListeningHistory"> | string | null
    artworkUrl?: StringNullableWithAggregatesFilter<"ListeningHistory"> | string | null
    durationSeconds?: IntWithAggregatesFilter<"ListeningHistory"> | number
    genre?: StringNullableWithAggregatesFilter<"ListeningHistory"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"ListeningHistory"> | string | null
    playedAt?: DateTimeWithAggregatesFilter<"ListeningHistory"> | Date | string
  }

  export type TrackedArtistWhereInput = {
    AND?: TrackedArtistWhereInput | TrackedArtistWhereInput[]
    OR?: TrackedArtistWhereInput[]
    NOT?: TrackedArtistWhereInput | TrackedArtistWhereInput[]
    id?: UuidFilter<"TrackedArtist"> | string
    userId?: UuidFilter<"TrackedArtist"> | string
    externalArtistId?: StringFilter<"TrackedArtist"> | string
    name?: StringFilter<"TrackedArtist"> | string
    handle?: StringNullableFilter<"TrackedArtist"> | string | null
    imageUrl?: StringNullableFilter<"TrackedArtist"> | string | null
    createdAt?: DateTimeFilter<"TrackedArtist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TrackedArtistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalArtistId?: SortOrder
    name?: SortOrder
    handle?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TrackedArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_externalArtistId?: TrackedArtistUserIdExternalArtistIdCompoundUniqueInput
    AND?: TrackedArtistWhereInput | TrackedArtistWhereInput[]
    OR?: TrackedArtistWhereInput[]
    NOT?: TrackedArtistWhereInput | TrackedArtistWhereInput[]
    userId?: UuidFilter<"TrackedArtist"> | string
    externalArtistId?: StringFilter<"TrackedArtist"> | string
    name?: StringFilter<"TrackedArtist"> | string
    handle?: StringNullableFilter<"TrackedArtist"> | string | null
    imageUrl?: StringNullableFilter<"TrackedArtist"> | string | null
    createdAt?: DateTimeFilter<"TrackedArtist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_externalArtistId">

  export type TrackedArtistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalArtistId?: SortOrder
    name?: SortOrder
    handle?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrackedArtistCountOrderByAggregateInput
    _max?: TrackedArtistMaxOrderByAggregateInput
    _min?: TrackedArtistMinOrderByAggregateInput
  }

  export type TrackedArtistScalarWhereWithAggregatesInput = {
    AND?: TrackedArtistScalarWhereWithAggregatesInput | TrackedArtistScalarWhereWithAggregatesInput[]
    OR?: TrackedArtistScalarWhereWithAggregatesInput[]
    NOT?: TrackedArtistScalarWhereWithAggregatesInput | TrackedArtistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TrackedArtist"> | string
    userId?: UuidWithAggregatesFilter<"TrackedArtist"> | string
    externalArtistId?: StringWithAggregatesFilter<"TrackedArtist"> | string
    name?: StringWithAggregatesFilter<"TrackedArtist"> | string
    handle?: StringNullableWithAggregatesFilter<"TrackedArtist"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"TrackedArtist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrackedArtist"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    tracks?: TrackCreateNestedManyWithoutArtistInput
    followers?: ArtistFollowCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    tracks?: TrackUncheckedCreateNestedManyWithoutArtistInput
    followers?: ArtistFollowUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUpdateManyWithoutArtistNestedInput
    followers?: ArtistFollowUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUncheckedUpdateManyWithoutArtistNestedInput
    followers?: ArtistFollowUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackCreateInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    artist: ArtistCreateNestedOneWithoutTracksInput
    playlistTracks?: PlaylistTrackCreateNestedManyWithoutTrackInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    artistId: string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    playlistTracks?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutTracksNestedInput
    playlistTracks?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    artistId?: StringFieldUpdateOperationsInput | string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistTracks?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    artistId: string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    artistId?: StringFieldUpdateOperationsInput | string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPlaylistsInput
    tracks?: PlaylistTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: PlaylistTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    tracks?: PlaylistTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: PlaylistTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackCreateInput = {
    position: number
    addedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutTracksInput
    track: TrackCreateNestedOneWithoutPlaylistTracksInput
  }

  export type PlaylistTrackUncheckedCreateInput = {
    playlistId: string
    trackId: string
    position: number
    addedAt?: Date | string
  }

  export type PlaylistTrackUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput
    track?: TrackUpdateOneRequiredWithoutPlaylistTracksNestedInput
  }

  export type PlaylistTrackUncheckedUpdateInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackCreateManyInput = {
    playlistId: string
    trackId: string
    position: number
    addedAt?: Date | string
  }

  export type PlaylistTrackUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackUncheckedUpdateManyInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventCreateInput = {
    id?: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMoodEventsInput
  }

  export type MoodEventUncheckedCreateInput = {
    id?: string
    userId: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoodEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoodEventsNestedInput
  }

  export type MoodEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventCreateManyInput = {
    id?: string
    userId: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoodEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventCreateInput = {
    id?: string
    progressMs: number
    occurredAt?: Date | string
    user: UserCreateNestedOneWithoutListeningEventsInput
    track: TrackCreateNestedOneWithoutListeningEventsInput
  }

  export type ListeningEventUncheckedCreateInput = {
    id?: string
    userId: string
    trackId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type ListeningEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListeningEventsNestedInput
    track?: TrackUpdateOneRequiredWithoutListeningEventsNestedInput
  }

  export type ListeningEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventCreateManyInput = {
    id?: string
    userId: string
    trackId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type ListeningEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtistFollowsInput
    artist: ArtistCreateNestedOneWithoutFollowersInput
  }

  export type ArtistFollowUncheckedCreateInput = {
    userId: string
    artistId: string
    createdAt?: Date | string
  }

  export type ArtistFollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistFollowsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type ArtistFollowUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowCreateManyInput = {
    userId: string
    artistId: string
    createdAt?: Date | string
  }

  export type ArtistFollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackCreateInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteTracksInput
  }

  export type FavoriteTrackUncheckedCreateInput = {
    id?: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
  }

  export type FavoriteTrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteTracksNestedInput
  }

  export type FavoriteTrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackCreateManyInput = {
    id?: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
  }

  export type FavoriteTrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryCreateInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
    user: UserCreateNestedOneWithoutListeningHistoryInput
  }

  export type ListeningHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
  }

  export type ListeningHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListeningHistoryNestedInput
  }

  export type ListeningHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryCreateManyInput = {
    id?: string
    userId: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
  }

  export type ListeningHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistCreateInput = {
    id?: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTrackedArtistsInput
  }

  export type TrackedArtistUncheckedCreateInput = {
    id?: string
    userId: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type TrackedArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTrackedArtistsNestedInput
  }

  export type TrackedArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistCreateManyInput = {
    id?: string
    userId: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type TrackedArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type MoodEventListRelationFilter = {
    every?: MoodEventWhereInput
    some?: MoodEventWhereInput
    none?: MoodEventWhereInput
  }

  export type ListeningEventListRelationFilter = {
    every?: ListeningEventWhereInput
    some?: ListeningEventWhereInput
    none?: ListeningEventWhereInput
  }

  export type ArtistFollowListRelationFilter = {
    every?: ArtistFollowWhereInput
    some?: ArtistFollowWhereInput
    none?: ArtistFollowWhereInput
  }

  export type FavoriteTrackListRelationFilter = {
    every?: FavoriteTrackWhereInput
    some?: FavoriteTrackWhereInput
    none?: FavoriteTrackWhereInput
  }

  export type ListeningHistoryListRelationFilter = {
    every?: ListeningHistoryWhereInput
    some?: ListeningHistoryWhereInput
    none?: ListeningHistoryWhereInput
  }

  export type TrackedArtistListRelationFilter = {
    every?: TrackedArtistWhereInput
    some?: TrackedArtistWhereInput
    none?: TrackedArtistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListeningEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistFollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteTrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListeningHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    imageUrl?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    monthlyListeners?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    imageUrl?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    imageUrl?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    monthlyListeners?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type PlaylistTrackListRelationFilter = {
    every?: PlaylistTrackWhereInput
    some?: PlaylistTrackWhereInput
    none?: PlaylistTrackWhereInput
  }

  export type PlaylistTrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    artistId?: SortOrder
    audioFeatures?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPlaylistSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistSource | EnumPlaylistSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistSourceFilter<$PrismaModel> | $Enums.PlaylistSource
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    source?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    source?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    source?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlaylistSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistSource | EnumPlaylistSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistSourceFilter<$PrismaModel>
    _max?: NestedEnumPlaylistSourceFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type TrackScalarRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type PlaylistTrackPlaylistIdTrackIdCompoundUniqueInput = {
    playlistId: string
    trackId: string
  }

  export type PlaylistTrackCountOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    position?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistTrackAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type PlaylistTrackMaxOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    position?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistTrackMinOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    position?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistTrackSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumMoodSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodSource | EnumMoodSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodSourceFilter<$PrismaModel> | $Enums.MoodSource
  }

  export type MoodEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    source?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMoodSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodSource | EnumMoodSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodSourceWithAggregatesFilter<$PrismaModel> | $Enums.MoodSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodSourceFilter<$PrismaModel>
    _max?: NestedEnumMoodSourceFilter<$PrismaModel>
  }

  export type ListeningEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    progressMs?: SortOrder
    occurredAt?: SortOrder
  }

  export type ListeningEventAvgOrderByAggregateInput = {
    progressMs?: SortOrder
  }

  export type ListeningEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    progressMs?: SortOrder
    occurredAt?: SortOrder
  }

  export type ListeningEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    progressMs?: SortOrder
    occurredAt?: SortOrder
  }

  export type ListeningEventSumOrderByAggregateInput = {
    progressMs?: SortOrder
  }

  export type ArtistFollowUserIdArtistIdCompoundUniqueInput = {
    userId: string
    artistId: string
  }

  export type ArtistFollowCountOrderByAggregateInput = {
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtistFollowMaxOrderByAggregateInput = {
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtistFollowMinOrderByAggregateInput = {
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteTrackUserIdExternalTrackIdCompoundUniqueInput = {
    userId: string
    externalTrackId: string
  }

  export type FavoriteTrackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteTrackAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type FavoriteTrackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteTrackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteTrackSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type ListeningHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    playedAt?: SortOrder
  }

  export type ListeningHistoryAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type ListeningHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    playedAt?: SortOrder
  }

  export type ListeningHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalTrackId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    artistId?: SortOrder
    album?: SortOrder
    artworkUrl?: SortOrder
    durationSeconds?: SortOrder
    genre?: SortOrder
    streamUrl?: SortOrder
    playedAt?: SortOrder
  }

  export type ListeningHistorySumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type TrackedArtistUserIdExternalArtistIdCompoundUniqueInput = {
    userId: string
    externalArtistId: string
  }

  export type TrackedArtistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalArtistId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackedArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalArtistId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackedArtistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalArtistId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput> | PlaylistCreateWithoutOwnerInput[] | PlaylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput | PlaylistCreateOrConnectWithoutOwnerInput[]
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type MoodEventCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput> | MoodEventCreateWithoutUserInput[] | MoodEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEventCreateOrConnectWithoutUserInput | MoodEventCreateOrConnectWithoutUserInput[]
    createMany?: MoodEventCreateManyUserInputEnvelope
    connect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
  }

  export type ListeningEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput> | ListeningEventCreateWithoutUserInput[] | ListeningEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutUserInput | ListeningEventCreateOrConnectWithoutUserInput[]
    createMany?: ListeningEventCreateManyUserInputEnvelope
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
  }

  export type ArtistFollowCreateNestedManyWithoutUserInput = {
    create?: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput> | ArtistFollowCreateWithoutUserInput[] | ArtistFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutUserInput | ArtistFollowCreateOrConnectWithoutUserInput[]
    createMany?: ArtistFollowCreateManyUserInputEnvelope
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
  }

  export type FavoriteTrackCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput> | FavoriteTrackCreateWithoutUserInput[] | FavoriteTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrackCreateOrConnectWithoutUserInput | FavoriteTrackCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteTrackCreateManyUserInputEnvelope
    connect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
  }

  export type ListeningHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput> | ListeningHistoryCreateWithoutUserInput[] | ListeningHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningHistoryCreateOrConnectWithoutUserInput | ListeningHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ListeningHistoryCreateManyUserInputEnvelope
    connect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
  }

  export type TrackedArtistCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput> | TrackedArtistCreateWithoutUserInput[] | TrackedArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedArtistCreateOrConnectWithoutUserInput | TrackedArtistCreateOrConnectWithoutUserInput[]
    createMany?: TrackedArtistCreateManyUserInputEnvelope
    connect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput> | PlaylistCreateWithoutOwnerInput[] | PlaylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput | PlaylistCreateOrConnectWithoutOwnerInput[]
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type MoodEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput> | MoodEventCreateWithoutUserInput[] | MoodEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEventCreateOrConnectWithoutUserInput | MoodEventCreateOrConnectWithoutUserInput[]
    createMany?: MoodEventCreateManyUserInputEnvelope
    connect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
  }

  export type ListeningEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput> | ListeningEventCreateWithoutUserInput[] | ListeningEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutUserInput | ListeningEventCreateOrConnectWithoutUserInput[]
    createMany?: ListeningEventCreateManyUserInputEnvelope
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
  }

  export type ArtistFollowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput> | ArtistFollowCreateWithoutUserInput[] | ArtistFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutUserInput | ArtistFollowCreateOrConnectWithoutUserInput[]
    createMany?: ArtistFollowCreateManyUserInputEnvelope
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
  }

  export type FavoriteTrackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput> | FavoriteTrackCreateWithoutUserInput[] | FavoriteTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrackCreateOrConnectWithoutUserInput | FavoriteTrackCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteTrackCreateManyUserInputEnvelope
    connect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
  }

  export type ListeningHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput> | ListeningHistoryCreateWithoutUserInput[] | ListeningHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningHistoryCreateOrConnectWithoutUserInput | ListeningHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ListeningHistoryCreateManyUserInputEnvelope
    connect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
  }

  export type TrackedArtistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput> | TrackedArtistCreateWithoutUserInput[] | TrackedArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedArtistCreateOrConnectWithoutUserInput | TrackedArtistCreateOrConnectWithoutUserInput[]
    createMany?: TrackedArtistCreateManyUserInputEnvelope
    connect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlaylistUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput> | PlaylistCreateWithoutOwnerInput[] | PlaylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput | PlaylistCreateOrConnectWithoutOwnerInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutOwnerInput | PlaylistUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutOwnerInput | PlaylistUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutOwnerInput | PlaylistUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type MoodEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput> | MoodEventCreateWithoutUserInput[] | MoodEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEventCreateOrConnectWithoutUserInput | MoodEventCreateOrConnectWithoutUserInput[]
    upsert?: MoodEventUpsertWithWhereUniqueWithoutUserInput | MoodEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEventCreateManyUserInputEnvelope
    set?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    disconnect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    delete?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    connect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    update?: MoodEventUpdateWithWhereUniqueWithoutUserInput | MoodEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEventUpdateManyWithWhereWithoutUserInput | MoodEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEventScalarWhereInput | MoodEventScalarWhereInput[]
  }

  export type ListeningEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput> | ListeningEventCreateWithoutUserInput[] | ListeningEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutUserInput | ListeningEventCreateOrConnectWithoutUserInput[]
    upsert?: ListeningEventUpsertWithWhereUniqueWithoutUserInput | ListeningEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningEventCreateManyUserInputEnvelope
    set?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    disconnect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    delete?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    update?: ListeningEventUpdateWithWhereUniqueWithoutUserInput | ListeningEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningEventUpdateManyWithWhereWithoutUserInput | ListeningEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
  }

  export type ArtistFollowUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput> | ArtistFollowCreateWithoutUserInput[] | ArtistFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutUserInput | ArtistFollowCreateOrConnectWithoutUserInput[]
    upsert?: ArtistFollowUpsertWithWhereUniqueWithoutUserInput | ArtistFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArtistFollowCreateManyUserInputEnvelope
    set?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    disconnect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    delete?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    update?: ArtistFollowUpdateWithWhereUniqueWithoutUserInput | ArtistFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArtistFollowUpdateManyWithWhereWithoutUserInput | ArtistFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
  }

  export type FavoriteTrackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput> | FavoriteTrackCreateWithoutUserInput[] | FavoriteTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrackCreateOrConnectWithoutUserInput | FavoriteTrackCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteTrackUpsertWithWhereUniqueWithoutUserInput | FavoriteTrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteTrackCreateManyUserInputEnvelope
    set?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    disconnect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    delete?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    connect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    update?: FavoriteTrackUpdateWithWhereUniqueWithoutUserInput | FavoriteTrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteTrackUpdateManyWithWhereWithoutUserInput | FavoriteTrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteTrackScalarWhereInput | FavoriteTrackScalarWhereInput[]
  }

  export type ListeningHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput> | ListeningHistoryCreateWithoutUserInput[] | ListeningHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningHistoryCreateOrConnectWithoutUserInput | ListeningHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ListeningHistoryUpsertWithWhereUniqueWithoutUserInput | ListeningHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningHistoryCreateManyUserInputEnvelope
    set?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    disconnect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    delete?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    connect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    update?: ListeningHistoryUpdateWithWhereUniqueWithoutUserInput | ListeningHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningHistoryUpdateManyWithWhereWithoutUserInput | ListeningHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningHistoryScalarWhereInput | ListeningHistoryScalarWhereInput[]
  }

  export type TrackedArtistUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput> | TrackedArtistCreateWithoutUserInput[] | TrackedArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedArtistCreateOrConnectWithoutUserInput | TrackedArtistCreateOrConnectWithoutUserInput[]
    upsert?: TrackedArtistUpsertWithWhereUniqueWithoutUserInput | TrackedArtistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackedArtistCreateManyUserInputEnvelope
    set?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    disconnect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    delete?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    connect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    update?: TrackedArtistUpdateWithWhereUniqueWithoutUserInput | TrackedArtistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackedArtistUpdateManyWithWhereWithoutUserInput | TrackedArtistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackedArtistScalarWhereInput | TrackedArtistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput> | PlaylistCreateWithoutOwnerInput[] | PlaylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput | PlaylistCreateOrConnectWithoutOwnerInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutOwnerInput | PlaylistUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutOwnerInput | PlaylistUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutOwnerInput | PlaylistUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type MoodEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput> | MoodEventCreateWithoutUserInput[] | MoodEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEventCreateOrConnectWithoutUserInput | MoodEventCreateOrConnectWithoutUserInput[]
    upsert?: MoodEventUpsertWithWhereUniqueWithoutUserInput | MoodEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEventCreateManyUserInputEnvelope
    set?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    disconnect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    delete?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    connect?: MoodEventWhereUniqueInput | MoodEventWhereUniqueInput[]
    update?: MoodEventUpdateWithWhereUniqueWithoutUserInput | MoodEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEventUpdateManyWithWhereWithoutUserInput | MoodEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEventScalarWhereInput | MoodEventScalarWhereInput[]
  }

  export type ListeningEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput> | ListeningEventCreateWithoutUserInput[] | ListeningEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutUserInput | ListeningEventCreateOrConnectWithoutUserInput[]
    upsert?: ListeningEventUpsertWithWhereUniqueWithoutUserInput | ListeningEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningEventCreateManyUserInputEnvelope
    set?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    disconnect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    delete?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    update?: ListeningEventUpdateWithWhereUniqueWithoutUserInput | ListeningEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningEventUpdateManyWithWhereWithoutUserInput | ListeningEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
  }

  export type ArtistFollowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput> | ArtistFollowCreateWithoutUserInput[] | ArtistFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutUserInput | ArtistFollowCreateOrConnectWithoutUserInput[]
    upsert?: ArtistFollowUpsertWithWhereUniqueWithoutUserInput | ArtistFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArtistFollowCreateManyUserInputEnvelope
    set?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    disconnect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    delete?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    update?: ArtistFollowUpdateWithWhereUniqueWithoutUserInput | ArtistFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArtistFollowUpdateManyWithWhereWithoutUserInput | ArtistFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
  }

  export type FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput> | FavoriteTrackCreateWithoutUserInput[] | FavoriteTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteTrackCreateOrConnectWithoutUserInput | FavoriteTrackCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteTrackUpsertWithWhereUniqueWithoutUserInput | FavoriteTrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteTrackCreateManyUserInputEnvelope
    set?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    disconnect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    delete?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    connect?: FavoriteTrackWhereUniqueInput | FavoriteTrackWhereUniqueInput[]
    update?: FavoriteTrackUpdateWithWhereUniqueWithoutUserInput | FavoriteTrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteTrackUpdateManyWithWhereWithoutUserInput | FavoriteTrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteTrackScalarWhereInput | FavoriteTrackScalarWhereInput[]
  }

  export type ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput> | ListeningHistoryCreateWithoutUserInput[] | ListeningHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningHistoryCreateOrConnectWithoutUserInput | ListeningHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ListeningHistoryUpsertWithWhereUniqueWithoutUserInput | ListeningHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningHistoryCreateManyUserInputEnvelope
    set?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    disconnect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    delete?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    connect?: ListeningHistoryWhereUniqueInput | ListeningHistoryWhereUniqueInput[]
    update?: ListeningHistoryUpdateWithWhereUniqueWithoutUserInput | ListeningHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningHistoryUpdateManyWithWhereWithoutUserInput | ListeningHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningHistoryScalarWhereInput | ListeningHistoryScalarWhereInput[]
  }

  export type TrackedArtistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput> | TrackedArtistCreateWithoutUserInput[] | TrackedArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedArtistCreateOrConnectWithoutUserInput | TrackedArtistCreateOrConnectWithoutUserInput[]
    upsert?: TrackedArtistUpsertWithWhereUniqueWithoutUserInput | TrackedArtistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackedArtistCreateManyUserInputEnvelope
    set?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    disconnect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    delete?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    connect?: TrackedArtistWhereUniqueInput | TrackedArtistWhereUniqueInput[]
    update?: TrackedArtistUpdateWithWhereUniqueWithoutUserInput | TrackedArtistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackedArtistUpdateManyWithWhereWithoutUserInput | TrackedArtistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackedArtistScalarWhereInput | TrackedArtistScalarWhereInput[]
  }

  export type TrackCreateNestedManyWithoutArtistInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ArtistFollowCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput> | ArtistFollowCreateWithoutArtistInput[] | ArtistFollowUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutArtistInput | ArtistFollowCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistFollowCreateManyArtistInputEnvelope
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ArtistFollowUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput> | ArtistFollowCreateWithoutArtistInput[] | ArtistFollowUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutArtistInput | ArtistFollowCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistFollowCreateManyArtistInputEnvelope
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrackUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutArtistInput | TrackUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutArtistInput | TrackUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutArtistInput | TrackUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ArtistFollowUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput> | ArtistFollowCreateWithoutArtistInput[] | ArtistFollowUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutArtistInput | ArtistFollowCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistFollowUpsertWithWhereUniqueWithoutArtistInput | ArtistFollowUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistFollowCreateManyArtistInputEnvelope
    set?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    disconnect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    delete?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    update?: ArtistFollowUpdateWithWhereUniqueWithoutArtistInput | ArtistFollowUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistFollowUpdateManyWithWhereWithoutArtistInput | ArtistFollowUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput> | TrackCreateWithoutArtistInput[] | TrackUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutArtistInput | TrackCreateOrConnectWithoutArtistInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutArtistInput | TrackUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TrackCreateManyArtistInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutArtistInput | TrackUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutArtistInput | TrackUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ArtistFollowUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput> | ArtistFollowCreateWithoutArtistInput[] | ArtistFollowUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistFollowCreateOrConnectWithoutArtistInput | ArtistFollowCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistFollowUpsertWithWhereUniqueWithoutArtistInput | ArtistFollowUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistFollowCreateManyArtistInputEnvelope
    set?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    disconnect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    delete?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    connect?: ArtistFollowWhereUniqueInput | ArtistFollowWhereUniqueInput[]
    update?: ArtistFollowUpdateWithWhereUniqueWithoutArtistInput | ArtistFollowUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistFollowUpdateManyWithWhereWithoutArtistInput | ArtistFollowUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutTracksInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    connect?: ArtistWhereUniqueInput
  }

  export type PlaylistTrackCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type ListeningEventCreateNestedManyWithoutTrackInput = {
    create?: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput> | ListeningEventCreateWithoutTrackInput[] | ListeningEventUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutTrackInput | ListeningEventCreateOrConnectWithoutTrackInput[]
    createMany?: ListeningEventCreateManyTrackInputEnvelope
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
  }

  export type PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type ListeningEventUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput> | ListeningEventCreateWithoutTrackInput[] | ListeningEventUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutTrackInput | ListeningEventCreateOrConnectWithoutTrackInput[]
    createMany?: ListeningEventCreateManyTrackInputEnvelope
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtistUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    upsert?: ArtistUpsertWithoutTracksInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutTracksInput, ArtistUpdateWithoutTracksInput>, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type PlaylistTrackUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutTrackInput | PlaylistTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type ListeningEventUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput> | ListeningEventCreateWithoutTrackInput[] | ListeningEventUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutTrackInput | ListeningEventCreateOrConnectWithoutTrackInput[]
    upsert?: ListeningEventUpsertWithWhereUniqueWithoutTrackInput | ListeningEventUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ListeningEventCreateManyTrackInputEnvelope
    set?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    disconnect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    delete?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    update?: ListeningEventUpdateWithWhereUniqueWithoutTrackInput | ListeningEventUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ListeningEventUpdateManyWithWhereWithoutTrackInput | ListeningEventUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutTrackInput | PlaylistTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type ListeningEventUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput> | ListeningEventCreateWithoutTrackInput[] | ListeningEventUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ListeningEventCreateOrConnectWithoutTrackInput | ListeningEventCreateOrConnectWithoutTrackInput[]
    upsert?: ListeningEventUpsertWithWhereUniqueWithoutTrackInput | ListeningEventUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ListeningEventCreateManyTrackInputEnvelope
    set?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    disconnect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    delete?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    connect?: ListeningEventWhereUniqueInput | ListeningEventWhereUniqueInput[]
    update?: ListeningEventUpdateWithWhereUniqueWithoutTrackInput | ListeningEventUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ListeningEventUpdateManyWithWhereWithoutTrackInput | ListeningEventUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistTrackCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type PlaylistTrackUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type EnumPlaylistSourceFieldUpdateOperationsInput = {
    set?: $Enums.PlaylistSource
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type PlaylistTrackUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutTracksInput = {
    create?: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTracksInput
    connect?: PlaylistWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutPlaylistTracksInput = {
    create?: XOR<TrackCreateWithoutPlaylistTracksInput, TrackUncheckedCreateWithoutPlaylistTracksInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylistTracksInput
    connect?: TrackWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTracksInput
    upsert?: PlaylistUpsertWithoutTracksInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutTracksInput, PlaylistUpdateWithoutTracksInput>, PlaylistUncheckedUpdateWithoutTracksInput>
  }

  export type TrackUpdateOneRequiredWithoutPlaylistTracksNestedInput = {
    create?: XOR<TrackCreateWithoutPlaylistTracksInput, TrackUncheckedCreateWithoutPlaylistTracksInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylistTracksInput
    upsert?: TrackUpsertWithoutPlaylistTracksInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutPlaylistTracksInput, TrackUpdateWithoutPlaylistTracksInput>, TrackUncheckedUpdateWithoutPlaylistTracksInput>
  }

  export type UserCreateNestedOneWithoutMoodEventsInput = {
    create?: XOR<UserCreateWithoutMoodEventsInput, UserUncheckedCreateWithoutMoodEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMoodSourceFieldUpdateOperationsInput = {
    set?: $Enums.MoodSource
  }

  export type UserUpdateOneRequiredWithoutMoodEventsNestedInput = {
    create?: XOR<UserCreateWithoutMoodEventsInput, UserUncheckedCreateWithoutMoodEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEventsInput
    upsert?: UserUpsertWithoutMoodEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodEventsInput, UserUpdateWithoutMoodEventsInput>, UserUncheckedUpdateWithoutMoodEventsInput>
  }

  export type UserCreateNestedOneWithoutListeningEventsInput = {
    create?: XOR<UserCreateWithoutListeningEventsInput, UserUncheckedCreateWithoutListeningEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningEventsInput
    connect?: UserWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutListeningEventsInput = {
    create?: XOR<TrackCreateWithoutListeningEventsInput, TrackUncheckedCreateWithoutListeningEventsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutListeningEventsInput
    connect?: TrackWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutListeningEventsNestedInput = {
    create?: XOR<UserCreateWithoutListeningEventsInput, UserUncheckedCreateWithoutListeningEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningEventsInput
    upsert?: UserUpsertWithoutListeningEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListeningEventsInput, UserUpdateWithoutListeningEventsInput>, UserUncheckedUpdateWithoutListeningEventsInput>
  }

  export type TrackUpdateOneRequiredWithoutListeningEventsNestedInput = {
    create?: XOR<TrackCreateWithoutListeningEventsInput, TrackUncheckedCreateWithoutListeningEventsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutListeningEventsInput
    upsert?: TrackUpsertWithoutListeningEventsInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutListeningEventsInput, TrackUpdateWithoutListeningEventsInput>, TrackUncheckedUpdateWithoutListeningEventsInput>
  }

  export type UserCreateNestedOneWithoutArtistFollowsInput = {
    create?: XOR<UserCreateWithoutArtistFollowsInput, UserUncheckedCreateWithoutArtistFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistFollowsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutArtistFollowsNestedInput = {
    create?: XOR<UserCreateWithoutArtistFollowsInput, UserUncheckedCreateWithoutArtistFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistFollowsInput
    upsert?: UserUpsertWithoutArtistFollowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistFollowsInput, UserUpdateWithoutArtistFollowsInput>, UserUncheckedUpdateWithoutArtistFollowsInput>
  }

  export type ArtistUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    upsert?: ArtistUpsertWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutFollowersInput, ArtistUpdateWithoutFollowersInput>, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutFavoriteTracksInput = {
    create?: XOR<UserCreateWithoutFavoriteTracksInput, UserUncheckedCreateWithoutFavoriteTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTracksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteTracksNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteTracksInput, UserUncheckedCreateWithoutFavoriteTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteTracksInput
    upsert?: UserUpsertWithoutFavoriteTracksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteTracksInput, UserUpdateWithoutFavoriteTracksInput>, UserUncheckedUpdateWithoutFavoriteTracksInput>
  }

  export type UserCreateNestedOneWithoutListeningHistoryInput = {
    create?: XOR<UserCreateWithoutListeningHistoryInput, UserUncheckedCreateWithoutListeningHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutListeningHistoryNestedInput = {
    create?: XOR<UserCreateWithoutListeningHistoryInput, UserUncheckedCreateWithoutListeningHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningHistoryInput
    upsert?: UserUpsertWithoutListeningHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListeningHistoryInput, UserUpdateWithoutListeningHistoryInput>, UserUncheckedUpdateWithoutListeningHistoryInput>
  }

  export type UserCreateNestedOneWithoutTrackedArtistsInput = {
    create?: XOR<UserCreateWithoutTrackedArtistsInput, UserUncheckedCreateWithoutTrackedArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackedArtistsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrackedArtistsNestedInput = {
    create?: XOR<UserCreateWithoutTrackedArtistsInput, UserUncheckedCreateWithoutTrackedArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackedArtistsInput
    upsert?: UserUpsertWithoutTrackedArtistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrackedArtistsInput, UserUpdateWithoutTrackedArtistsInput>, UserUncheckedUpdateWithoutTrackedArtistsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPlaylistSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistSource | EnumPlaylistSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistSourceFilter<$PrismaModel> | $Enums.PlaylistSource
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPlaylistSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistSource | EnumPlaylistSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistSource[] | ListEnumPlaylistSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistSourceFilter<$PrismaModel>
    _max?: NestedEnumPlaylistSourceFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMoodSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodSource | EnumMoodSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodSourceFilter<$PrismaModel> | $Enums.MoodSource
  }

  export type NestedEnumMoodSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodSource | EnumMoodSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodSource[] | ListEnumMoodSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodSourceWithAggregatesFilter<$PrismaModel> | $Enums.MoodSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodSourceFilter<$PrismaModel>
    _max?: NestedEnumMoodSourceFilter<$PrismaModel>
  }

  export type PlaylistCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: PlaylistTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: PlaylistTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput>
  }

  export type PlaylistCreateManyOwnerInputEnvelope = {
    data: PlaylistCreateManyOwnerInput | PlaylistCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MoodEventCreateWithoutUserInput = {
    id?: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoodEventUncheckedCreateWithoutUserInput = {
    id?: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoodEventCreateOrConnectWithoutUserInput = {
    where: MoodEventWhereUniqueInput
    create: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput>
  }

  export type MoodEventCreateManyUserInputEnvelope = {
    data: MoodEventCreateManyUserInput | MoodEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListeningEventCreateWithoutUserInput = {
    id?: string
    progressMs: number
    occurredAt?: Date | string
    track: TrackCreateNestedOneWithoutListeningEventsInput
  }

  export type ListeningEventUncheckedCreateWithoutUserInput = {
    id?: string
    trackId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type ListeningEventCreateOrConnectWithoutUserInput = {
    where: ListeningEventWhereUniqueInput
    create: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput>
  }

  export type ListeningEventCreateManyUserInputEnvelope = {
    data: ListeningEventCreateManyUserInput | ListeningEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArtistFollowCreateWithoutUserInput = {
    createdAt?: Date | string
    artist: ArtistCreateNestedOneWithoutFollowersInput
  }

  export type ArtistFollowUncheckedCreateWithoutUserInput = {
    artistId: string
    createdAt?: Date | string
  }

  export type ArtistFollowCreateOrConnectWithoutUserInput = {
    where: ArtistFollowWhereUniqueInput
    create: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput>
  }

  export type ArtistFollowCreateManyUserInputEnvelope = {
    data: ArtistFollowCreateManyUserInput | ArtistFollowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteTrackCreateWithoutUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
  }

  export type FavoriteTrackUncheckedCreateWithoutUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
  }

  export type FavoriteTrackCreateOrConnectWithoutUserInput = {
    where: FavoriteTrackWhereUniqueInput
    create: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput>
  }

  export type FavoriteTrackCreateManyUserInputEnvelope = {
    data: FavoriteTrackCreateManyUserInput | FavoriteTrackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListeningHistoryCreateWithoutUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
  }

  export type ListeningHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
  }

  export type ListeningHistoryCreateOrConnectWithoutUserInput = {
    where: ListeningHistoryWhereUniqueInput
    create: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput>
  }

  export type ListeningHistoryCreateManyUserInputEnvelope = {
    data: ListeningHistoryCreateManyUserInput | ListeningHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrackedArtistCreateWithoutUserInput = {
    id?: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type TrackedArtistUncheckedCreateWithoutUserInput = {
    id?: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type TrackedArtistCreateOrConnectWithoutUserInput = {
    where: TrackedArtistWhereUniqueInput
    create: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput>
  }

  export type TrackedArtistCreateManyUserInputEnvelope = {
    data: TrackedArtistCreateManyUserInput | TrackedArtistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutOwnerInput, PlaylistUncheckedUpdateWithoutOwnerInput>
    create: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutOwnerInput, PlaylistUncheckedUpdateWithoutOwnerInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutOwnerInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: UuidFilter<"Playlist"> | string
    ownerId?: UuidFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    source?: EnumPlaylistSourceFilter<"Playlist"> | $Enums.PlaylistSource
    isPublic?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type MoodEventUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodEventWhereUniqueInput
    update: XOR<MoodEventUpdateWithoutUserInput, MoodEventUncheckedUpdateWithoutUserInput>
    create: XOR<MoodEventCreateWithoutUserInput, MoodEventUncheckedCreateWithoutUserInput>
  }

  export type MoodEventUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodEventWhereUniqueInput
    data: XOR<MoodEventUpdateWithoutUserInput, MoodEventUncheckedUpdateWithoutUserInput>
  }

  export type MoodEventUpdateManyWithWhereWithoutUserInput = {
    where: MoodEventScalarWhereInput
    data: XOR<MoodEventUpdateManyMutationInput, MoodEventUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodEventScalarWhereInput = {
    AND?: MoodEventScalarWhereInput | MoodEventScalarWhereInput[]
    OR?: MoodEventScalarWhereInput[]
    NOT?: MoodEventScalarWhereInput | MoodEventScalarWhereInput[]
    id?: UuidFilter<"MoodEvent"> | string
    userId?: UuidFilter<"MoodEvent"> | string
    mood?: StringFilter<"MoodEvent"> | string
    source?: EnumMoodSourceFilter<"MoodEvent"> | $Enums.MoodSource
    metadata?: JsonNullableFilter<"MoodEvent">
    createdAt?: DateTimeFilter<"MoodEvent"> | Date | string
  }

  export type ListeningEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ListeningEventWhereUniqueInput
    update: XOR<ListeningEventUpdateWithoutUserInput, ListeningEventUncheckedUpdateWithoutUserInput>
    create: XOR<ListeningEventCreateWithoutUserInput, ListeningEventUncheckedCreateWithoutUserInput>
  }

  export type ListeningEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ListeningEventWhereUniqueInput
    data: XOR<ListeningEventUpdateWithoutUserInput, ListeningEventUncheckedUpdateWithoutUserInput>
  }

  export type ListeningEventUpdateManyWithWhereWithoutUserInput = {
    where: ListeningEventScalarWhereInput
    data: XOR<ListeningEventUpdateManyMutationInput, ListeningEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ListeningEventScalarWhereInput = {
    AND?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
    OR?: ListeningEventScalarWhereInput[]
    NOT?: ListeningEventScalarWhereInput | ListeningEventScalarWhereInput[]
    id?: UuidFilter<"ListeningEvent"> | string
    userId?: UuidFilter<"ListeningEvent"> | string
    trackId?: UuidFilter<"ListeningEvent"> | string
    progressMs?: IntFilter<"ListeningEvent"> | number
    occurredAt?: DateTimeFilter<"ListeningEvent"> | Date | string
  }

  export type ArtistFollowUpsertWithWhereUniqueWithoutUserInput = {
    where: ArtistFollowWhereUniqueInput
    update: XOR<ArtistFollowUpdateWithoutUserInput, ArtistFollowUncheckedUpdateWithoutUserInput>
    create: XOR<ArtistFollowCreateWithoutUserInput, ArtistFollowUncheckedCreateWithoutUserInput>
  }

  export type ArtistFollowUpdateWithWhereUniqueWithoutUserInput = {
    where: ArtistFollowWhereUniqueInput
    data: XOR<ArtistFollowUpdateWithoutUserInput, ArtistFollowUncheckedUpdateWithoutUserInput>
  }

  export type ArtistFollowUpdateManyWithWhereWithoutUserInput = {
    where: ArtistFollowScalarWhereInput
    data: XOR<ArtistFollowUpdateManyMutationInput, ArtistFollowUncheckedUpdateManyWithoutUserInput>
  }

  export type ArtistFollowScalarWhereInput = {
    AND?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
    OR?: ArtistFollowScalarWhereInput[]
    NOT?: ArtistFollowScalarWhereInput | ArtistFollowScalarWhereInput[]
    userId?: UuidFilter<"ArtistFollow"> | string
    artistId?: UuidFilter<"ArtistFollow"> | string
    createdAt?: DateTimeFilter<"ArtistFollow"> | Date | string
  }

  export type FavoriteTrackUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteTrackWhereUniqueInput
    update: XOR<FavoriteTrackUpdateWithoutUserInput, FavoriteTrackUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteTrackCreateWithoutUserInput, FavoriteTrackUncheckedCreateWithoutUserInput>
  }

  export type FavoriteTrackUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteTrackWhereUniqueInput
    data: XOR<FavoriteTrackUpdateWithoutUserInput, FavoriteTrackUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteTrackUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteTrackScalarWhereInput
    data: XOR<FavoriteTrackUpdateManyMutationInput, FavoriteTrackUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteTrackScalarWhereInput = {
    AND?: FavoriteTrackScalarWhereInput | FavoriteTrackScalarWhereInput[]
    OR?: FavoriteTrackScalarWhereInput[]
    NOT?: FavoriteTrackScalarWhereInput | FavoriteTrackScalarWhereInput[]
    id?: UuidFilter<"FavoriteTrack"> | string
    userId?: UuidFilter<"FavoriteTrack"> | string
    externalTrackId?: StringFilter<"FavoriteTrack"> | string
    title?: StringFilter<"FavoriteTrack"> | string
    artist?: StringFilter<"FavoriteTrack"> | string
    artistId?: StringNullableFilter<"FavoriteTrack"> | string | null
    album?: StringNullableFilter<"FavoriteTrack"> | string | null
    artworkUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    durationSeconds?: IntFilter<"FavoriteTrack"> | number
    genre?: StringNullableFilter<"FavoriteTrack"> | string | null
    streamUrl?: StringNullableFilter<"FavoriteTrack"> | string | null
    createdAt?: DateTimeFilter<"FavoriteTrack"> | Date | string
  }

  export type ListeningHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ListeningHistoryWhereUniqueInput
    update: XOR<ListeningHistoryUpdateWithoutUserInput, ListeningHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ListeningHistoryCreateWithoutUserInput, ListeningHistoryUncheckedCreateWithoutUserInput>
  }

  export type ListeningHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ListeningHistoryWhereUniqueInput
    data: XOR<ListeningHistoryUpdateWithoutUserInput, ListeningHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ListeningHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ListeningHistoryScalarWhereInput
    data: XOR<ListeningHistoryUpdateManyMutationInput, ListeningHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ListeningHistoryScalarWhereInput = {
    AND?: ListeningHistoryScalarWhereInput | ListeningHistoryScalarWhereInput[]
    OR?: ListeningHistoryScalarWhereInput[]
    NOT?: ListeningHistoryScalarWhereInput | ListeningHistoryScalarWhereInput[]
    id?: UuidFilter<"ListeningHistory"> | string
    userId?: UuidFilter<"ListeningHistory"> | string
    externalTrackId?: StringFilter<"ListeningHistory"> | string
    title?: StringFilter<"ListeningHistory"> | string
    artist?: StringFilter<"ListeningHistory"> | string
    artistId?: StringNullableFilter<"ListeningHistory"> | string | null
    album?: StringNullableFilter<"ListeningHistory"> | string | null
    artworkUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    durationSeconds?: IntFilter<"ListeningHistory"> | number
    genre?: StringNullableFilter<"ListeningHistory"> | string | null
    streamUrl?: StringNullableFilter<"ListeningHistory"> | string | null
    playedAt?: DateTimeFilter<"ListeningHistory"> | Date | string
  }

  export type TrackedArtistUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackedArtistWhereUniqueInput
    update: XOR<TrackedArtistUpdateWithoutUserInput, TrackedArtistUncheckedUpdateWithoutUserInput>
    create: XOR<TrackedArtistCreateWithoutUserInput, TrackedArtistUncheckedCreateWithoutUserInput>
  }

  export type TrackedArtistUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackedArtistWhereUniqueInput
    data: XOR<TrackedArtistUpdateWithoutUserInput, TrackedArtistUncheckedUpdateWithoutUserInput>
  }

  export type TrackedArtistUpdateManyWithWhereWithoutUserInput = {
    where: TrackedArtistScalarWhereInput
    data: XOR<TrackedArtistUpdateManyMutationInput, TrackedArtistUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackedArtistScalarWhereInput = {
    AND?: TrackedArtistScalarWhereInput | TrackedArtistScalarWhereInput[]
    OR?: TrackedArtistScalarWhereInput[]
    NOT?: TrackedArtistScalarWhereInput | TrackedArtistScalarWhereInput[]
    id?: UuidFilter<"TrackedArtist"> | string
    userId?: UuidFilter<"TrackedArtist"> | string
    externalArtistId?: StringFilter<"TrackedArtist"> | string
    name?: StringFilter<"TrackedArtist"> | string
    handle?: StringNullableFilter<"TrackedArtist"> | string | null
    imageUrl?: StringNullableFilter<"TrackedArtist"> | string | null
    createdAt?: DateTimeFilter<"TrackedArtist"> | Date | string
  }

  export type TrackCreateWithoutArtistInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    playlistTracks?: PlaylistTrackCreateNestedManyWithoutTrackInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutArtistInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    playlistTracks?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutArtistInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput>
  }

  export type TrackCreateManyArtistInputEnvelope = {
    data: TrackCreateManyArtistInput | TrackCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type ArtistFollowCreateWithoutArtistInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtistFollowsInput
  }

  export type ArtistFollowUncheckedCreateWithoutArtistInput = {
    userId: string
    createdAt?: Date | string
  }

  export type ArtistFollowCreateOrConnectWithoutArtistInput = {
    where: ArtistFollowWhereUniqueInput
    create: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput>
  }

  export type ArtistFollowCreateManyArtistInputEnvelope = {
    data: ArtistFollowCreateManyArtistInput | ArtistFollowCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type TrackUpsertWithWhereUniqueWithoutArtistInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutArtistInput, TrackUncheckedUpdateWithoutArtistInput>
    create: XOR<TrackCreateWithoutArtistInput, TrackUncheckedCreateWithoutArtistInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutArtistInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutArtistInput, TrackUncheckedUpdateWithoutArtistInput>
  }

  export type TrackUpdateManyWithWhereWithoutArtistInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutArtistInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: UuidFilter<"Track"> | string
    externalId?: StringNullableFilter<"Track"> | string | null
    title?: StringFilter<"Track"> | string
    album?: StringNullableFilter<"Track"> | string | null
    artworkUrl?: StringNullableFilter<"Track"> | string | null
    durationSeconds?: IntFilter<"Track"> | number
    artistId?: UuidFilter<"Track"> | string
    audioFeatures?: JsonNullableFilter<"Track">
    createdAt?: DateTimeFilter<"Track"> | Date | string
  }

  export type ArtistFollowUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistFollowWhereUniqueInput
    update: XOR<ArtistFollowUpdateWithoutArtistInput, ArtistFollowUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistFollowCreateWithoutArtistInput, ArtistFollowUncheckedCreateWithoutArtistInput>
  }

  export type ArtistFollowUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistFollowWhereUniqueInput
    data: XOR<ArtistFollowUpdateWithoutArtistInput, ArtistFollowUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistFollowUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistFollowScalarWhereInput
    data: XOR<ArtistFollowUpdateManyMutationInput, ArtistFollowUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtistCreateWithoutTracksInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    followers?: ArtistFollowCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    followers?: ArtistFollowUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutTracksInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
  }

  export type PlaylistTrackCreateWithoutTrackInput = {
    position: number
    addedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutTracksInput
  }

  export type PlaylistTrackUncheckedCreateWithoutTrackInput = {
    playlistId: string
    position: number
    addedAt?: Date | string
  }

  export type PlaylistTrackCreateOrConnectWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    create: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistTrackCreateManyTrackInputEnvelope = {
    data: PlaylistTrackCreateManyTrackInput | PlaylistTrackCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type ListeningEventCreateWithoutTrackInput = {
    id?: string
    progressMs: number
    occurredAt?: Date | string
    user: UserCreateNestedOneWithoutListeningEventsInput
  }

  export type ListeningEventUncheckedCreateWithoutTrackInput = {
    id?: string
    userId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type ListeningEventCreateOrConnectWithoutTrackInput = {
    where: ListeningEventWhereUniqueInput
    create: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput>
  }

  export type ListeningEventCreateManyTrackInputEnvelope = {
    data: ListeningEventCreateManyTrackInput | ListeningEventCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithoutTracksInput = {
    update: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutTracksInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type ArtistUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ArtistFollowUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ArtistFollowUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    update: XOR<PlaylistTrackUpdateWithoutTrackInput, PlaylistTrackUncheckedUpdateWithoutTrackInput>
    create: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    data: XOR<PlaylistTrackUpdateWithoutTrackInput, PlaylistTrackUncheckedUpdateWithoutTrackInput>
  }

  export type PlaylistTrackUpdateManyWithWhereWithoutTrackInput = {
    where: PlaylistTrackScalarWhereInput
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type PlaylistTrackScalarWhereInput = {
    AND?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
    OR?: PlaylistTrackScalarWhereInput[]
    NOT?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
    playlistId?: UuidFilter<"PlaylistTrack"> | string
    trackId?: UuidFilter<"PlaylistTrack"> | string
    position?: IntFilter<"PlaylistTrack"> | number
    addedAt?: DateTimeFilter<"PlaylistTrack"> | Date | string
  }

  export type ListeningEventUpsertWithWhereUniqueWithoutTrackInput = {
    where: ListeningEventWhereUniqueInput
    update: XOR<ListeningEventUpdateWithoutTrackInput, ListeningEventUncheckedUpdateWithoutTrackInput>
    create: XOR<ListeningEventCreateWithoutTrackInput, ListeningEventUncheckedCreateWithoutTrackInput>
  }

  export type ListeningEventUpdateWithWhereUniqueWithoutTrackInput = {
    where: ListeningEventWhereUniqueInput
    data: XOR<ListeningEventUpdateWithoutTrackInput, ListeningEventUncheckedUpdateWithoutTrackInput>
  }

  export type ListeningEventUpdateManyWithWhereWithoutTrackInput = {
    where: ListeningEventScalarWhereInput
    data: XOR<ListeningEventUpdateManyMutationInput, ListeningEventUncheckedUpdateManyWithoutTrackInput>
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type PlaylistTrackCreateWithoutPlaylistInput = {
    position: number
    addedAt?: Date | string
    track: TrackCreateNestedOneWithoutPlaylistTracksInput
  }

  export type PlaylistTrackUncheckedCreateWithoutPlaylistInput = {
    trackId: string
    position: number
    addedAt?: Date | string
  }

  export type PlaylistTrackCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    create: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTrackCreateManyPlaylistInputEnvelope = {
    data: PlaylistTrackCreateManyPlaylistInput | PlaylistTrackCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    update: XOR<PlaylistTrackUpdateWithoutPlaylistInput, PlaylistTrackUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    data: XOR<PlaylistTrackUpdateWithoutPlaylistInput, PlaylistTrackUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistTrackScalarWhereInput
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistCreateWithoutTracksInput = {
    id?: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutTracksInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutTracksInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
  }

  export type TrackCreateWithoutPlaylistTracksInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    artist: ArtistCreateNestedOneWithoutTracksInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutPlaylistTracksInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    artistId: string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutPlaylistTracksInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutPlaylistTracksInput, TrackUncheckedCreateWithoutPlaylistTracksInput>
  }

  export type PlaylistUpsertWithoutTracksInput = {
    update: XOR<PlaylistUpdateWithoutTracksInput, PlaylistUncheckedUpdateWithoutTracksInput>
    create: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutTracksInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutTracksInput, PlaylistUncheckedUpdateWithoutTracksInput>
  }

  export type PlaylistUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUpsertWithoutPlaylistTracksInput = {
    update: XOR<TrackUpdateWithoutPlaylistTracksInput, TrackUncheckedUpdateWithoutPlaylistTracksInput>
    create: XOR<TrackCreateWithoutPlaylistTracksInput, TrackUncheckedCreateWithoutPlaylistTracksInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutPlaylistTracksInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutPlaylistTracksInput, TrackUncheckedUpdateWithoutPlaylistTracksInput>
  }

  export type TrackUpdateWithoutPlaylistTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutTracksNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutPlaylistTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    artistId?: StringFieldUpdateOperationsInput | string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type UserCreateWithoutMoodEventsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodEventsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodEventsInput, UserUncheckedCreateWithoutMoodEventsInput>
  }

  export type UserUpsertWithoutMoodEventsInput = {
    update: XOR<UserUpdateWithoutMoodEventsInput, UserUncheckedUpdateWithoutMoodEventsInput>
    create: XOR<UserCreateWithoutMoodEventsInput, UserUncheckedCreateWithoutMoodEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodEventsInput, UserUncheckedUpdateWithoutMoodEventsInput>
  }

  export type UserUpdateWithoutMoodEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutListeningEventsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListeningEventsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListeningEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListeningEventsInput, UserUncheckedCreateWithoutListeningEventsInput>
  }

  export type TrackCreateWithoutListeningEventsInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    artist: ArtistCreateNestedOneWithoutTracksInput
    playlistTracks?: PlaylistTrackCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutListeningEventsInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    artistId: string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    playlistTracks?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutListeningEventsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutListeningEventsInput, TrackUncheckedCreateWithoutListeningEventsInput>
  }

  export type UserUpsertWithoutListeningEventsInput = {
    update: XOR<UserUpdateWithoutListeningEventsInput, UserUncheckedUpdateWithoutListeningEventsInput>
    create: XOR<UserCreateWithoutListeningEventsInput, UserUncheckedCreateWithoutListeningEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListeningEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListeningEventsInput, UserUncheckedUpdateWithoutListeningEventsInput>
  }

  export type UserUpdateWithoutListeningEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListeningEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackUpsertWithoutListeningEventsInput = {
    update: XOR<TrackUpdateWithoutListeningEventsInput, TrackUncheckedUpdateWithoutListeningEventsInput>
    create: XOR<TrackCreateWithoutListeningEventsInput, TrackUncheckedCreateWithoutListeningEventsInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutListeningEventsInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutListeningEventsInput, TrackUncheckedUpdateWithoutListeningEventsInput>
  }

  export type TrackUpdateWithoutListeningEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutTracksNestedInput
    playlistTracks?: PlaylistTrackUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutListeningEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    artistId?: StringFieldUpdateOperationsInput | string
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistTracks?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type UserCreateWithoutArtistFollowsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArtistFollowsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArtistFollowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistFollowsInput, UserUncheckedCreateWithoutArtistFollowsInput>
  }

  export type ArtistCreateWithoutFollowersInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    tracks?: TrackCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    countryCode?: string | null
    imageUrl?: string | null
    monthlyListeners?: number | null
    createdAt?: Date | string
    tracks?: TrackUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutArtistFollowsInput = {
    update: XOR<UserUpdateWithoutArtistFollowsInput, UserUncheckedUpdateWithoutArtistFollowsInput>
    create: XOR<UserCreateWithoutArtistFollowsInput, UserUncheckedCreateWithoutArtistFollowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtistFollowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtistFollowsInput, UserUncheckedUpdateWithoutArtistFollowsInput>
  }

  export type UserUpdateWithoutArtistFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtistUpsertWithoutFollowersInput = {
    update: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserCreateWithoutFavoriteTracksInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteTracksInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteTracksInput, UserUncheckedCreateWithoutFavoriteTracksInput>
  }

  export type UserUpsertWithoutFavoriteTracksInput = {
    update: XOR<UserUpdateWithoutFavoriteTracksInput, UserUncheckedUpdateWithoutFavoriteTracksInput>
    create: XOR<UserCreateWithoutFavoriteTracksInput, UserUncheckedCreateWithoutFavoriteTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteTracksInput, UserUncheckedUpdateWithoutFavoriteTracksInput>
  }

  export type UserUpdateWithoutFavoriteTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutListeningHistoryInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListeningHistoryInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    trackedArtists?: TrackedArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListeningHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListeningHistoryInput, UserUncheckedCreateWithoutListeningHistoryInput>
  }

  export type UserUpsertWithoutListeningHistoryInput = {
    update: XOR<UserUpdateWithoutListeningHistoryInput, UserUncheckedUpdateWithoutListeningHistoryInput>
    create: XOR<UserCreateWithoutListeningHistoryInput, UserUncheckedCreateWithoutListeningHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListeningHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListeningHistoryInput, UserUncheckedUpdateWithoutListeningHistoryInput>
  }

  export type UserUpdateWithoutListeningHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListeningHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    trackedArtists?: TrackedArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTrackedArtistsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrackedArtistsInput = {
    id?: string
    email: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    moodEvents?: MoodEventUncheckedCreateNestedManyWithoutUserInput
    listeningEvents?: ListeningEventUncheckedCreateNestedManyWithoutUserInput
    artistFollows?: ArtistFollowUncheckedCreateNestedManyWithoutUserInput
    favoriteTracks?: FavoriteTrackUncheckedCreateNestedManyWithoutUserInput
    listeningHistory?: ListeningHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrackedArtistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrackedArtistsInput, UserUncheckedCreateWithoutTrackedArtistsInput>
  }

  export type UserUpsertWithoutTrackedArtistsInput = {
    update: XOR<UserUpdateWithoutTrackedArtistsInput, UserUncheckedUpdateWithoutTrackedArtistsInput>
    create: XOR<UserCreateWithoutTrackedArtistsInput, UserUncheckedCreateWithoutTrackedArtistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrackedArtistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrackedArtistsInput, UserUncheckedUpdateWithoutTrackedArtistsInput>
  }

  export type UserUpdateWithoutTrackedArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrackedArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    moodEvents?: MoodEventUncheckedUpdateManyWithoutUserNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutUserNestedInput
    artistFollows?: ArtistFollowUncheckedUpdateManyWithoutUserNestedInput
    favoriteTracks?: FavoriteTrackUncheckedUpdateManyWithoutUserNestedInput
    listeningHistory?: ListeningHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    coverUrl?: string | null
    source?: $Enums.PlaylistSource
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodEventCreateManyUserInput = {
    id?: string
    mood: string
    source: $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ListeningEventCreateManyUserInput = {
    id?: string
    trackId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type ArtistFollowCreateManyUserInput = {
    artistId: string
    createdAt?: Date | string
  }

  export type FavoriteTrackCreateManyUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    createdAt?: Date | string
  }

  export type ListeningHistoryCreateManyUserInput = {
    id?: string
    externalTrackId: string
    title: string
    artist: string
    artistId?: string | null
    album?: string | null
    artworkUrl?: string | null
    durationSeconds?: number
    genre?: string | null
    streamUrl?: string | null
    playedAt?: Date | string
  }

  export type TrackedArtistCreateManyUserInput = {
    id?: string
    externalArtistId: string
    name: string
    handle?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type PlaylistUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: PlaylistTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: PlaylistTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumPlaylistSourceFieldUpdateOperationsInput | $Enums.PlaylistSource
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    source?: EnumMoodSourceFieldUpdateOperationsInput | $Enums.MoodSource
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutListeningEventsNestedInput
  }

  export type ListeningEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type ArtistFollowUncheckedUpdateWithoutUserInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowUncheckedUpdateManyWithoutUserInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteTrackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedArtistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalArtistId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackCreateManyArtistInput = {
    id?: string
    externalId?: string | null
    title: string
    album?: string | null
    artworkUrl?: string | null
    durationSeconds: number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ArtistFollowCreateManyArtistInput = {
    userId: string
    createdAt?: Date | string
  }

  export type TrackUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistTracks?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    listeningEvents?: ListeningEventUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistTracks?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
    listeningEvents?: ListeningEventUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    audioFeatures?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistFollowsNestedInput
  }

  export type ArtistFollowUncheckedUpdateWithoutArtistInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistFollowUncheckedUpdateManyWithoutArtistInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackCreateManyTrackInput = {
    playlistId: string
    position: number
    addedAt?: Date | string
  }

  export type ListeningEventCreateManyTrackInput = {
    id?: string
    userId: string
    progressMs: number
    occurredAt?: Date | string
  }

  export type PlaylistTrackUpdateWithoutTrackInput = {
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput
  }

  export type PlaylistTrackUncheckedUpdateWithoutTrackInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutTrackInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListeningEventsNestedInput
  }

  export type ListeningEventUncheckedUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningEventUncheckedUpdateManyWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressMs?: IntFieldUpdateOperationsInput | number
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackCreateManyPlaylistInput = {
    trackId: string
    position: number
    addedAt?: Date | string
  }

  export type PlaylistTrackUpdateWithoutPlaylistInput = {
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutPlaylistTracksNestedInput
  }

  export type PlaylistTrackUncheckedUpdateWithoutPlaylistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutPlaylistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}